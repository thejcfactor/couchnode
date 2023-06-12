'use strict'

const assert = require('chai').assert
const { ApiImplementation } = require('../new_lib/generaltypes')

const H = require('./harness')

describe('#bucketmanager', function () {
  let testBucket

  before(function () {
    H.skipIfMissingFeature(this, H.Features.BucketManagement)

    testBucket = H.genTestKey()
  })

  it('should successfully create a bucket', async function () {
    var bmgr = H.c.buckets()
    await bmgr.createBucket({
      name: testBucket,
      flushEnabled: true,
      ramQuotaMB: 256,
    })
  }).timeout(10 * 1000)

  it('should emit the correct error on duplicate buckets', async function () {
    var bmgr = H.c.buckets()
    await H.throwsHelper(async () => {
      await bmgr.createBucket({
        name: testBucket,
        ramQuotaMB: 256,
      })
    }, H.lib.BucketExistsError)
  })

  it('should successfully get a bucket', async function () {
    var bmgr = H.c.buckets()
    var res = await bmgr.getBucket(testBucket)
    assert.isObject(res)
    const expected = {
      name: testBucket,
      flushEnabled: true,
      ramQuotaMB: 256,
      // numReplicas: 1,
      numReplicas: 0,
      // replicaIndexes: false,
      replicaIndexes: true,
      bucketType: 'membase',
      storageBackend: 'couchstore',
      evictionPolicy: 'valueOnly',
      maxExpiry: 0,
      compressionMode: 'passive',
      // minimumDurabilityLevel: 0,
      minimumDurabilityLevel: 1,
    }
    assert.deepStrictEqual(res, expected)
  })

  it('should successfully get all buckets', async function () {
    var bmgr = H.c.buckets()
    var res = await bmgr.getAllBuckets()
    assert.isArray(res)
    assert.isObject(res[0])
  })

  it('should fail to get a missing bucket', async function () {
    var bmgr = H.c.buckets()
    await H.throwsHelper(async () => {
      await bmgr.getBucket('invalid-bucket')
    }, H.lib.BucketNotFoundError)
  })

  it('should successfully flush a bucket', async function () {
    if(H.c.apiImplementation == ApiImplementation.Protostellar) {
      await H.throwsHelper(async () => {
        var bmgr = H.c.buckets()
        await bmgr.flushBucket(testBucket)
      }, H.lib.FeatureNotAvailableError)
    } else {
      var bmgr = H.c.buckets()
      await bmgr.flushBucket(testBucket)
    }
  }).timeout(10 * 1000)

  it('should error when trying to flush a missing bucket', async function () {
    const err = H.c.apiImplementation == ApiImplementation.Protostellar ? H.lib.FeatureNotAvailableError : H.lib.BucketNotFoundError
    var bmgr = H.c.buckets()
    await H.throwsHelper(async () => {
      await bmgr.flushBucket('invalid-bucket')
    }, err)
  })

  it('should successfully update a bucket', async function () {
    var bmgr = H.c.buckets()
    await bmgr.updateBucket({
      name: testBucket,
      flushEnabled: false,
      ramQuotaMB: 256, // required for PS
    })
  })

  it('should error when trying to flush an unflushable bucket', async function () {
    var bmgr = H.c.buckets()
    await H.throwsHelper(async () => {
      await bmgr.flushBucket(testBucket)
    }, H.lib.CouchbaseError)
  })

  it('should successfully drop a bucket', async function () {
    var bmgr = H.c.buckets()
    await bmgr.dropBucket(testBucket)
  })

  it('should fail to drop a missing bucket', async function () {
    var bmgr = H.c.buckets()
    await H.throwsHelper(async () => {
      await bmgr.dropBucket(testBucket)
    }, H.lib.BucketNotFoundError)
  })

  it('should successfully create a bucket with flush and replicaIndexes disabled', async function () {
    var bmgr = H.c.buckets()
    await bmgr.createBucket({
      name: testBucket,
      flushEnabled: false,
      replicaIndexes: false,
      ramQuotaMB: 256,
    })

    var res = await bmgr.getBucket(testBucket)
    assert.isObject(res)
    const expected = {
      name: testBucket,
      flushEnabled: false,
      ramQuotaMB: 256,
      // numReplicas: 1,
      numReplicas: 0,
      // replicaIndexes: false,
      replicaIndexes: true,
      bucketType: 'membase',
      storageBackend: 'couchstore',
      evictionPolicy: 'valueOnly',
      maxExpiry: 0,
      compressionMode: 'passive',
      // minimumDurabilityLevel: 0,
      minimumDurabilityLevel: 1,
    }
    assert.deepStrictEqual(res, expected)

    await bmgr.dropBucket(testBucket)
  }).timeout(10 * 1000)
})

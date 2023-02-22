'use strict'

const assert = require('chai').assert
const testdata = require('./testdata')

const H = require('./harness')

describe('N1QL', function () {
  let testUid, idxName, sidxName
  let testDocs
  let deferredIndexes = []

  describe('#query - cluster level', function () {
    before(async function () {
      H.skipIfMissingFeature(this, H.Features.Query)
  
      testUid = H.genTestKey()
      idxName = H.genTestKey()
      sidxName = H.genTestKey()
      for (let i = 0; i < 3; i++) {
        deferredIndexes.push(H.genTestKey())
      }
  
      testDocs = await testdata.upsertData(H.dco, testUid)
    })
  
    after(async function () {
      await testdata.removeTestData(H.dco, testDocs)
      for (let i = 0; i < deferredIndexes.length; i++) {
        await H.c.queryIndexes().dropIndex(H.b.name, deferredIndexes[i])
      }
    })

    it('should successfully create a primary index', async function () {
      await H.c.queryIndexes().createPrimaryIndex(H.b.name, {
        name: idxName,
      })
    }).timeout(60000)
  
    it('should fail to create a duplicate primary index', async function () {
      await H.throwsHelper(async () => {
        await H.c.queryIndexes().createPrimaryIndex(H.b.name, {
          name: idxName,
        })
      }, H.lib.IndexExistsError)
    })
  
    it('should successfully create a secondary index (using a new connection)', async function () {
      var cluster = await H.lib.Cluster.connect(H.connStr, H.connOpts)
  
      await cluster.queryIndexes().createIndex(H.b.name, sidxName, ['name'])
  
      await cluster.close()
    }).timeout(20000)
  
    it('should fail to create a duplicate secondary index', async function () {
      await H.throwsHelper(async () => {
        await H.c.queryIndexes().createIndex(H.b.name, sidxName, ['name'])
      }, H.lib.IndexExistsError)
    })
  
    it('should successfully get all indexes', async function () {
      var idxs = await H.c.queryIndexes().getAllIndexes(H.b.name)
      assert.isAtLeast(idxs.length, 1)
    })
  
    it('should see test data correctly', async function () {
      /* eslint-disable-next-line no-constant-condition */
      while (true) {
        var res = null
        try {
          var qs = `SELECT * FROM ${H.b.name} WHERE testUid='${testUid}'`
          res = await H.c.query(qs)
        } catch (e) {} // eslint-disable-line no-empty
  
        if (!res || res.rows.length !== testdata.docCount()) {
          await H.sleep(100)
          continue
        }
  
        assert.isArray(res.rows)
        assert.lengthOf(res.rows, testdata.docCount())
        assert.isObject(res.meta)
  
        break
      }
    }).timeout(10000)
  
    it('should see test data correctly with a new connection', async function () {
      var cluster = await H.lib.Cluster.connect(H.connStr, H.connOpts)
  
      const qs = `SELECT * FROM ${H.b.name} WHERE testUid='${testUid}'`
      const res = await cluster.query(qs)
  
      assert.isArray(res.rows)
      assert.lengthOf(res.rows, testdata.docCount())
      assert.isObject(res.meta)
  
      await cluster.close()
    }).timeout(10000)
  
    it('should stream test data correctly', async function () {
      const streamQuery = (qs) => {
        return new Promise((resolve, reject) => {
          let rowsOut = []
          let metaOut = null
          H.c
            .query(qs)
            .on('row', (row) => {
              rowsOut.push(row)
            })
            .on('meta', (meta) => {
              metaOut = meta
            })
            .on('end', () => {
              resolve({
                rows: rowsOut,
                meta: metaOut,
              })
            })
            .on('error', (err) => {
              reject(err)
            })
        })
      }
  
      /* eslint-disable-next-line no-constant-condition */
      while (true) {
        var res = null
        try {
          var qs = `SELECT * FROM ${H.b.name} WHERE testUid='${testUid}'`
          res = await streamQuery(qs)
        } catch (e) {} // eslint-disable-line no-empty
  
        if (!res || res.rows.length !== testdata.docCount()) {
          await H.sleep(100)
          continue
        }
  
        assert.isArray(res.rows)
        assert.lengthOf(res.rows, testdata.docCount())
        assert.isObject(res.meta)
  
        break
      }
    }).timeout(10000)
  
    it('should work with parameters correctly', async function () {
      /* eslint-disable-next-line no-constant-condition */
      while (true) {
        var res = null
        try {
          var qs = `SELECT * FROM ${H.b.name} WHERE testUid=$2`
          res = await H.c.query(qs, {
            parameters: [undefined, testUid],
          })
        } catch (e) {} // eslint-disable-line no-empty
  
        if (!res || res.rows.length !== testdata.docCount()) {
          await H.sleep(100)
          continue
        }
  
        assert.isArray(res.rows)
        assert.lengthOf(res.rows, testdata.docCount())
        assert.isObject(res.meta)
  
        break
      }
    }).timeout(10000)
  
    it('should work with named parameters correctly', async function () {
      /* eslint-disable-next-line no-constant-condition */
      while (true) {
        var res = null
        try {
          var qs = `SELECT * FROM ${H.b.name} WHERE testUid=$tuid`
          res = await H.c.query(qs, {
            parameters: {
              tuid: testUid,
            },
          })
        } catch (e) {} // eslint-disable-line no-empty
  
        if (res.rows.length !== testdata.docCount()) {
          await H.sleep(100)
          continue
        }
  
        assert.isArray(res.rows)
        assert.lengthOf(res.rows, testdata.docCount())
        assert.isObject(res.meta)
  
        break
      }
    }).timeout(10000)
  
    it('should filter undefined named parameters', async function () {
      /* eslint-disable-next-line no-constant-condition */
      while (true) {
        var res = null
        try {
          var qs = `SELECT * FROM ${H.b.name} WHERE testUid=$tuid`
          res = await H.c.query(qs, {
            parameters: {
              tuid: testUid,
              filterMe: undefined,
            },
          })
        } catch (e) {} // eslint-disable-line no-empty
  
        if (res.rows.length !== testdata.docCount()) {
          await H.sleep(100)
          continue
        }
  
        assert.isArray(res.rows)
        assert.lengthOf(res.rows, testdata.docCount())
        assert.isObject(res.meta)
  
        break
      }
    }).timeout(10000)
  
    it('should work with lots of options specified', async function () {
      /* eslint-disable-next-line no-constant-condition */
      while (true) {
        var res = null
        try {
          var qs =
            'SELECT * FROM ' + H.b.name + ' WHERE testUid="' + testUid + '"'
          res = await H.c.query(qs, {
            adhoc: true,
            clientContextId: 'hello-world',
            maxParallelism: 10,
            pipelineBatch: 10,
            pipelineCap: 10,
            scanCap: 10,
            readOnly: true,
            profile: H.lib.QueryProfileMode.Timings,
            metrics: true,
          })
        } catch (e) {} // eslint-disable-line no-empty
  
        if (res.rows.length !== testdata.docCount()) {
          await H.sleep(100)
          continue
        }
  
        assert.isArray(res.rows)
        assert.lengthOf(res.rows, testdata.docCount())
        assert.isObject(res.meta)
        assert.isString(res.meta.requestId)
        assert.equal(res.meta.clientContextId, 'hello-world')
        assert.equal(res.meta.status, H.lib.QueryStatus.Success)
        assert.isObject(res.meta.signature)
        assert.isObject(res.meta.metrics)
        assert.isObject(res.meta.profile)
  
        break
      }
    }).timeout(10000)
  
    it('should wait till all indexes are online', async function () {
      await H.c.queryIndexes().watchIndexes(H.b.name, [idxName, sidxName], 2000)
    }).timeout(3000)
  
    it('should fail watching when some indexes are missing', async function () {
      await H.throwsHelper(async () => {
        await H.c.queryIndexes().watchIndexes(H.b.name, ['invalid-index'], 2000)
      }, H.lib.CouchbaseError)
    }).timeout(3000)
  
    it('should successfully drop a secondary index', async function () {
      await H.c.queryIndexes().dropIndex(H.b.name, sidxName)
    })
  
    it('should fail to drop a missing secondary index', async function () {
      await H.throwsHelper(async () => {
        await H.c.queryIndexes().dropIndex(H.b.name, sidxName)
      }, H.lib.QueryIndexNotFoundError)
    })
  
    it('should build deferred indexes', async function () {
      for (let i = 0; i < deferredIndexes.length; i++) {
        await H.c
          .queryIndexes()
          .createIndex(H.b.name, deferredIndexes[i], ['name'], { deferred: true })
      }
  
      var idxs = await H.c.queryIndexes().getAllIndexes(H.b.name)
      var filteredIdxs = idxs.filter((idx) => idx.state === 'deferred')
      assert.lengthOf(filteredIdxs, deferredIndexes.length)
  
      await H.c.queryIndexes().buildDeferredIndexes(H.b.name)
  
      await H.c.queryIndexes().watchIndexes(
        H.b.name,
        filteredIdxs.map((f) => f.name),
        6000
      )
    }).timeout(60000)
  
    it('should successfully drop a primary index', async function () {
      await H.c.queryIndexes().dropPrimaryIndex(H.b.name, {
        name: idxName,
      })
    })
  
    it('should fail to drop a missing primary index', async function () {
      await H.throwsHelper(async () => {
        await H.c.queryIndexes().dropPrimaryIndex(H.b.name, {
          name: idxName,
        })
      }, H.lib.QueryIndexNotFoundError)
    })
  })

  describe('#query - scope level', function () {
    before(async function () {
      H.skipIfMissingFeature(this, H.Features.Collections)
      H.skipIfMissingFeature(this, H.Features.Query)
  
      testUid = H.genTestKey()
      idxName = H.genTestKey()
      sidxName = H.genTestKey()
      for (let i = 0; i < 3; i++) {
        deferredIndexes.push(H.genTestKey())
      }
  
      testDocs = await testdata.upsertData(H.co, testUid)
    })
  
    after(async function () {
      await testdata.removeTestData(H.co, testDocs)
      for (let i = 0; i < deferredIndexes.length; i++) {
        await H.c.queryIndexes().dropIndex(H.b.name,
          deferredIndexes[i], { 
            collectionName: H.co.name, 
            scopeName: H.s.name,
          })
      }
    })

    it('should successfully create a primary index', async function () {
      await H.c.queryIndexes().createPrimaryIndex(H.b.name, {
        name: idxName,
        collectionName: H.co.name,
        scopeName: H.s.name,
      })
    }).timeout(60000)

    it('should fail to create a duplicate primary index', async function () {
      await H.throwsHelper(async () => {
        await H.c.queryIndexes().createPrimaryIndex(H.b.name, {
          name: idxName,
          collectionName: H.co.name,
          scopeName: H.s.name,
        })
      }, H.lib.IndexExistsError)
    })
  
    it('should successfully create a secondary index (using a new connection)', async function () {
      var cluster = await H.lib.Cluster.connect(H.connStr, H.connOpts)
  
      await cluster.queryIndexes().createIndex(H.b.name,
        sidxName,
        ['name'], {
          collectionName: H.co.name,
          scopeName: H.s.name,
        })
  
      await cluster.close()
    }).timeout(20000)
  
    it('should fail to create a duplicate secondary index', async function () {
      await H.throwsHelper(async () => {
        await H.c.queryIndexes().createIndex(H.b.name,
          sidxName,
          ['name'], {
            collectionName: H.co.name,
            scopeName: H.s.name,
          })
      }, H.lib.IndexExistsError)
    })
  
    it('should successfully get all indexes', async function () {
      var idxs = await H.c.queryIndexes().getAllIndexes(H.b.name, {
        collectionName: H.co.name,
        scopeName: H.s.name,
      })
      assert.isAtLeast(idxs.length, 1)
    })
  
    it('should see test data correctly', async function () {
      /* eslint-disable-next-line no-constant-condition */
      while (true) {
        var res = null
        try {
          var qs = `SELECT * FROM ${H.co.name} WHERE testUid='${testUid}'`
          res = await H.s.query(qs)
        } catch (e) {} // eslint-disable-line no-empty
  
        if (!res || res.rows.length !== testdata.docCount()) {
          await H.sleep(100)
          continue
        }
  
        assert.isArray(res.rows)
        assert.lengthOf(res.rows, testdata.docCount())
        assert.isObject(res.meta)
  
        break
      }
    }).timeout(10000)

    it('should see test data correctly with a new connection', async function () {
      const cluster = await H.lib.Cluster.connect(H.connStr, H.connOpts)
      const bucket = cluster.bucket(H.b.name)
      const scope = bucket.scope(H.s.name)
  
      const qs = `SELECT * FROM ${H.co.name} WHERE testUid='${testUid}'`
      const res = await scope.query(qs)
  
      assert.isArray(res.rows)
      assert.lengthOf(res.rows, testdata.docCount())
      assert.isObject(res.meta)
  
      await cluster.close()
    }).timeout(10000)
  
    it('should stream test data correctly', async function () {
      const streamQuery = (qs) => {
        return new Promise((resolve, reject) => {
          let rowsOut = []
          let metaOut = null
          H.s
            .query(qs)
            .on('row', (row) => {
              rowsOut.push(row)
            })
            .on('meta', (meta) => {
              metaOut = meta
            })
            .on('end', () => {
              resolve({
                rows: rowsOut,
                meta: metaOut,
              })
            })
            .on('error', (err) => {
              reject(err)
            })
        })
      }
  
      /* eslint-disable-next-line no-constant-condition */
      while (true) {
        var res = null
        try {
          var qs = `SELECT * FROM ${H.co.name} WHERE testUid='${testUid}'`
          res = await streamQuery(qs)
        } catch (e) {} // eslint-disable-line no-empty
  
        if (!res || res.rows.length !== testdata.docCount()) {
          await H.sleep(100)
          continue
        }
  
        assert.isArray(res.rows)
        assert.lengthOf(res.rows, testdata.docCount())
        assert.isObject(res.meta)
  
        break
      }
    }).timeout(10000)

    it('should work with parameters correctly', async function () {
      /* eslint-disable-next-line no-constant-condition */
      while (true) {
        var res = null
        try {
          var qs = `SELECT * FROM ${H.co.name} WHERE testUid=$2`
          res = await H.s.query(qs, {
            parameters: [undefined, testUid],
          })
        } catch (e) {} // eslint-disable-line no-empty
  
        if (!res || res.rows.length !== testdata.docCount()) {
          await H.sleep(100)
          continue
        }
  
        assert.isArray(res.rows)
        assert.lengthOf(res.rows, testdata.docCount())
        assert.isObject(res.meta)
  
        break
      }
    }).timeout(10000)
  
    it('should work with named parameters correctly', async function () {
      /* eslint-disable-next-line no-constant-condition */
      while (true) {
        var res = null
        try {
          var qs = `SELECT * FROM ${H.co.name} WHERE testUid=$tuid`
          res = await H.s.query(qs, {
            parameters: {
              tuid: testUid,
            },
          })
        } catch (e) {} // eslint-disable-line no-empty
  
        if (res.rows.length !== testdata.docCount()) {
          await H.sleep(100)
          continue
        }
  
        assert.isArray(res.rows)
        assert.lengthOf(res.rows, testdata.docCount())
        assert.isObject(res.meta)
  
        break
      }
    }).timeout(10000)
  
    it('should filter undefined named parameters', async function () {
      /* eslint-disable-next-line no-constant-condition */
      while (true) {
        var res = null
        try {
          var qs = `SELECT * FROM ${H.co.name} WHERE testUid=$tuid`
          res = await H.s.query(qs, {
            parameters: {
              tuid: testUid,
              filterMe: undefined,
            },
          })
        } catch (e) {} // eslint-disable-line no-empty
  
        if (res.rows.length !== testdata.docCount()) {
          await H.sleep(100)
          continue
        }
  
        assert.isArray(res.rows)
        assert.lengthOf(res.rows, testdata.docCount())
        assert.isObject(res.meta)
  
        break
      }
    }).timeout(10000)
  
    it('should work with lots of options specified', async function () {
      /* eslint-disable-next-line no-constant-condition */
      while (true) {
        var res = null
        try {
          var qs =
            'SELECT * FROM ' + H.co.name + ' WHERE testUid="' + testUid + '"'
          res = await H.s.query(qs, {
            adhoc: true,
            clientContextId: 'hello-world',
            maxParallelism: 10,
            pipelineBatch: 10,
            pipelineCap: 10,
            scanCap: 10,
            readOnly: true,
            profile: H.lib.QueryProfileMode.Timings,
            metrics: true,
          })
        } catch (e) {} // eslint-disable-line no-empty
  
        if (res.rows.length !== testdata.docCount()) {
          await H.sleep(100)
          continue
        }
  
        assert.isArray(res.rows)
        assert.lengthOf(res.rows, testdata.docCount())
        assert.isObject(res.meta)
        assert.isString(res.meta.requestId)
        assert.equal(res.meta.clientContextId, 'hello-world')
        assert.equal(res.meta.status, H.lib.QueryStatus.Success)
        assert.isObject(res.meta.signature)
        assert.isObject(res.meta.metrics)
        assert.isObject(res.meta.profile)
  
        break
      }
    }).timeout(10000)
  
    it('should wait till all indexes are online', async function () {
      await H.c.queryIndexes().watchIndexes(H.b.name,
        [idxName, sidxName],
        2000, {
          collectionName: H.co.name,
          scopeName: H.s.name,
        })
    }).timeout(3000)
  
    it('should fail watching when some indexes are missing', async function () {
      await H.throwsHelper(async () => {
        await H.c.queryIndexes().watchIndexes(H.b.name,
          ['invalid-index'],
          2000, {
            collectionName: H.co.name,
            scopeName: H.s.name,
          })
      }, H.lib.CouchbaseError)
    }).timeout(3000)
  
    it('should successfully drop a secondary index', async function () {
      await H.c.queryIndexes().dropIndex(H.b.name,
        sidxName, {
          collectionName: H.co.name,
          scopeName: H.s.name,
        })
    })
  
    it('should fail to drop a missing secondary index', async function () {
      await H.throwsHelper(async () => {
        await H.c.queryIndexes().dropIndex(H.b.name,
          sidxName, {
            collectionName: H.co.name,
            scopeName: H.s.name,
          })
      }, H.lib.QueryIndexNotFoundError)
    })
  
    it('should build deferred indexes', async function () {
      for (let i = 0; i < deferredIndexes.length; i++) {
        await H.c
          .queryIndexes()
          .createIndex(H.b.name,
            deferredIndexes[i], 
            ['name'],
            { 
              deferred: true,
              collectionName: H.co.name,
              scopeName: H.s.name,
            })
      }
  
      var idxs = await H.c.queryIndexes().getAllIndexes(H.b.name, {
        collectionName: H.co.name,
        scopeName: H.s.name,
      })
      var filteredIdxs = idxs.filter((idx) => idx.state === 'deferred')
      assert.lengthOf(filteredIdxs, deferredIndexes.length)
  
      await H.c.queryIndexes().buildDeferredIndexes(H.b.name, {
        collectionName: H.co.name,
        scopeName: H.s.name,
      })
  
      await H.c.queryIndexes().watchIndexes(
        H.b.name,
        filteredIdxs.map((f) => f.name),
        6000, {
          collectionName: H.co.name,
          scopeName: H.s.name,
        }
      )
    }).timeout(60000)
  
    it('should successfully drop a primary index', async function () {
      await H.c.queryIndexes().dropPrimaryIndex(H.b.name, {
        name: idxName,
        collectionName: H.co.name,
        scopeName: H.s.name,
      })
    })
  
    it('should fail to drop a missing primary index', async function () {
      await H.throwsHelper(async () => {
        await H.c.queryIndexes().dropPrimaryIndex(H.b.name, {
          name: idxName,
          collectionName: H.co.name,
          scopeName: H.s.name,
        })
      }, H.lib.QueryIndexNotFoundError)
    })

  })
})

function genericTests(collFn) {
  let testUid, idxName, sidxName
  let testDocs
  let deferredIndexes = []
  describe('#QueryIndexManagement', function () {
    before(async function () {
      H.skipIfMissingFeature(this, H.Features.Query)
  
      testUid = H.genTestKey()
      idxName = H.genTestKey()
      sidxName = H.genTestKey()
      for (let i = 0; i < 3; i++) {
        deferredIndexes.push(H.genTestKey())
      }
  
      testDocs = await testdata.upsertData(collFn(), testUid)
    })
  
    after(async function () {
      await testdata.removeTestData(collFn(), testDocs)
      for (let i = 0; i < deferredIndexes.length; i++) {
        await collFn().queryIndexes().dropIndex(deferredIndexes[i])
      }
    })

    it('should successfully create a primary index', async function () {
      await collFn().queryIndexes().createPrimaryIndex({
        name: idxName,
      })
    }).timeout(60000)

    it('should successfully create a secondary index', async function () {  
      await collFn().queryIndexes().createIndex(sidxName, ['name'])

    }).timeout(20000)
  
    it('should fail to create a duplicate secondary index', async function () {
      await H.throwsHelper(async () => {
        await collFn().queryIndexes().createIndex(sidxName, ['name'])
      }, H.lib.IndexExistsError)
    })
  
    it('should successfully get all indexes', async function () {
      var idxs = await collFn().queryIndexes().getAllIndexes()
      assert.isAtLeast(idxs.length, 1)
    })

    it('should wait till all indexes are online', async function () {
      await collFn().queryIndexes().watchIndexes([idxName, sidxName], 2000)
    }).timeout(3000)
  
    it('should fail watching when some indexes are missing', async function () {
      await H.throwsHelper(async () => {
        await collFn().queryIndexes().watchIndexes(['invalid-index'], 2000)
      }, H.lib.CouchbaseError)
    }).timeout(3000)
  
    it('should successfully drop a secondary index', async function () {
      await collFn().queryIndexes().dropIndex(sidxName)
    })
  
    it('should fail to drop a missing secondary index', async function () {
      await H.throwsHelper(async () => {
        await collFn().queryIndexes().dropIndex(sidxName)
      }, H.lib.QueryIndexNotFoundError)
    })
  
    it('should build deferred indexes', async function () {
      for (let i = 0; i < deferredIndexes.length; i++) {
        await collFn()
          .queryIndexes()
          .createIndex(deferredIndexes[i], ['name'], { deferred: true })
      }
  
      var idxs = await collFn().queryIndexes().getAllIndexes()
      var filteredIdxs = idxs.filter((idx) => idx.state === 'deferred')
      assert.lengthOf(filteredIdxs, deferredIndexes.length)
  
      await collFn().queryIndexes().buildDeferredIndexes()
  
      await collFn().queryIndexes().watchIndexes(
        filteredIdxs.map((f) => f.name),
        6000
      )
    }).timeout(60000)
  
    it('should successfully drop a primary index', async function () {
      await collFn().queryIndexes().dropPrimaryIndex({
        name: idxName,
      })
    })
  
    it('should fail to drop a missing primary index', async function () {
      await H.throwsHelper(async () => {
        await collFn().queryIndexes().dropPrimaryIndex({
          name: idxName,
        })
      }, H.lib.QueryIndexNotFoundError)
    })
  })
}

describe('#CollectionQueryIndexManager - default', function () {
  /* eslint-disable-next-line mocha/no-setup-in-describe */
  genericTests(() => H.dco)
})


describe('#CollectionQueryIndexManager - named', function () {
  /* eslint-disable-next-line mocha/no-setup-in-describe */
  genericTests(() => H.co)
})
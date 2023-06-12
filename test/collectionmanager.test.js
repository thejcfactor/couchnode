'use strict'

const { assert } = require('chai')
const H = require('./harness')
const { ApiImplementation } = require('../new_lib/generaltypes')

describe('#collectionmanager', function () {
  let testScope, testColl

  before(function () {
    H.skipIfMissingFeature(this, H.Features.Collections)

    testScope = H.genTestKey()
    testColl = H.genTestKey()
  })

  it('should successfully create a scope', async function () {
    var cmgr = H.b.collections()
    await cmgr.createScope(testScope)
  })

  it('should emit the correct error on duplicate scopes', async function () {
    var cmgr = H.b.collections()
    const err = H.c.apiImplementation == ApiImplementation.Protostellar ? H.lib.CouchbaseError : H.lib.ScopeExistsError
    await H.throwsHelper(async () => {
      await cmgr.createScope(testScope)
    }, err)
  })

  it('should successfully create a collection', async function () {
    var cmgr = H.b.collections()
    await cmgr.createCollection({name: testColl, scopeName: testScope})
  })

  it('should emit the correct error on duplicate collections', async function () {
    var cmgr = H.b.collections()
    const err = H.c.apiImplementation == ApiImplementation.Protostellar ? H.lib.CouchbaseError : H.lib.CollectionExistsError
    await H.throwsHelper(async () => {
      await cmgr.createCollection({ name:testColl, scopeName:testScope })
    }, err)
  })

  it('should emit the correct error on missing scopes', async function () {
    var cmgr = H.b.collections()
    const err = H.c.apiImplementation == ApiImplementation.Protostellar ? H.lib.CouchbaseError : H.lib.ScopeNotFoundError
    await H.throwsHelper(async () => {
      await cmgr.createCollection({name: 'some-scope-for-testing', scopeName: 'invalid-scope'})
    }, err)
  })

  it('should successfully fetch all scopes', async function () {
    var cmgr = H.b.collections()
    const scopes = await cmgr.getAllScopes()

    const foundScope = scopes.find((v) => v.name === testScope)
    assert.isOk(foundScope)

    const foundColl = foundScope.collections.find((v) => v.name === testColl)
    assert.isOk(foundColl)
  })

  it('should successfully drop a collection', async function () {
    var cmgr = H.b.collections()
    await cmgr.dropCollection({name: testColl, scopeName: testScope})
  })

  it('should fail to drop a collection from a missing scope', async function () {
    var cmgr = H.b.collections()
    const err = H.c.apiImplementation == ApiImplementation.Protostellar ? H.lib.CouchbaseError : H.lib.ScopeNotFoundError
    await H.throwsHelper(async () => {
      await cmgr.createCollection({ name: testColl, scopeName: 'invalid-scope' })
    }, err)
  })

  it('should fail to drop a missing collection', async function () {
    var cmgr = H.b.collections()
    const err = H.c.apiImplementation == ApiImplementation.Protostellar ? H.lib.CouchbaseError : H.lib.CollectionNotFoundError
    await H.throwsHelper(async () => {
      await cmgr.dropCollection({ name: testColl, scopeName: testScope })
    }, err)
  })

  it('should successfully drop a scope', async function () {
    var cmgr = H.b.collections()
    await cmgr.dropScope(testScope)
  })

  it('should fail to drop a missing scope', async function () {
    var cmgr = H.b.collections()
    const err = H.c.apiImplementation == ApiImplementation.Protostellar ? H.lib.CouchbaseError : H.lib.ScopeNotFoundError
    await H.throwsHelper(async () => {
      await cmgr.dropScope(testScope)
    }, err)
  })
})

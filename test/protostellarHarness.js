'use strict'

const assert = require('chai').assert
const uuid = require('uuid')
const semver = require('semver')
const couchbase = require('../lib/protostellar/couchbase')

try {
  const SegfaultHandler = require('segfault-handler')
  SegfaultHandler.registerHandler()
} catch (e) {
  // segfault-handler is just a helper, its not required
}

const ServerFeatures = {
  KeyValue: 'kv',
  Ssl: 'ssl',
  Views: 'views',
  SpatialViews: 'spatial_views',
  Query: 'query',
  Subdoc: 'subdoc',
  Xattr: 'xattr',
  Search: 'search',
  Analytics: 'analytics',
  Collections: 'collections',
  Replicas: 'replicas',
  UserManagement: 'user_management',
  BucketManagement: 'bucket_management',
  GetMeta: 'get_meta',
  AnalyticsPendingMutations: 'analytics_pending_mutations',
  UserGroupManagement: 'user_group_management',
  PreserveExpiry: 'preserve_expiry',
  Eventing: 'eventing',
  Transactions: 'transactions',
  ServerDurability: 'server_durability',
}

class ServerVersion {
  constructor(major, minor, patch, isMock) {
    this.major = major
    this.minor = minor
    this.patch = patch
    this.isMock = isMock
  }

  isAtLeast(major, minor, patch) {
    if (this.major === 0 && this.minor === 0 && this.patch === 0) {
      // if no version is provided, assume latest
      return true
    }

    if (major < this.major) {
      return true
    } else if (major > this.major) {
      return false
    }

    if (minor < this.minor) {
      return true
    } else if (minor > this.minor) {
      return false
    }

    return patch <= this.patch
  }
}

var TEST_CONFIG = {
  connstr: undefined,
  version: new ServerVersion(0, 0, 0, false),
  bucket: 'default',
  coll: 'test',
  user: undefined,
  pass: undefined,
  features: [],
}

if (process.env.CNCSTR !== undefined) {
  TEST_CONFIG.connstr = process.env.CNCSTR
}
if (process.env.CNCVER !== undefined) {
  assert(!!TEST_CONFIG.connstr, 'must not specify a version without a connstr')
  var ver = process.env.CNCVER
  var major = semver.major(ver)
  var minor = semver.minor(ver)
  var patch = semver.patch(ver)
  TEST_CONFIG.version = new ServerVersion(major, minor, patch, false)
}
if (process.env.CNBUCKET !== undefined) {
  TEST_CONFIG.bucket = process.env.CNBUCKET
}
if (process.env.CNCOLL !== undefined) {
  TEST_CONFIG.coll = process.env.CNCOLL
}
if (process.env.CNUSER !== undefined) {
  TEST_CONFIG.user = process.env.CNUSER
}
if (process.env.CNPASS !== undefined) {
  TEST_CONFIG.pass = process.env.CNPASS
}
if (process.env.CNFEAT !== undefined) {
  var featureStrs = process.env.CNFEAT.split(',')
  featureStrs.forEach((featureStr) => {
    var featureName = featureStr.substr(1)

    var featureEnabled = undefined
    if (featureStr[0] === '+') {
      featureEnabled = true
    } else if (featureStr[0] === '-') {
      featureEnabled = false
    }

    TEST_CONFIG.features.push({
      feature: featureName,
      enabled: featureEnabled,
    })
  })
}

class Harness {
  get Features() {
    return ServerFeatures
  }

  constructor() {
    this._connstr = TEST_CONFIG.connstr
    this._version = TEST_CONFIG.version
    this._bucket = TEST_CONFIG.bucket
    this._coll = TEST_CONFIG.coll
    this._user = TEST_CONFIG.user
    this._pass = TEST_CONFIG.pass


    assert(!!this._connstr, 'must specify a connstr with Protostellar')

    this._testKey = uuid.v1().substr(0, 8)
    this._testCtr = 1

    this._mockInst = null
    this._testCluster = null
    this._testBucket = null
    this._testScope = null
    this._testColl = null
    this._testDColl = null
  }

  get connStr() {
    return this._connstr
  }

  get bucketName() {
    return this._bucket
  }

  get scopeName() {
    return '_default'
  }

  get collectionName() {
    return this._coll
  }

  get connOpts() {
    return {
      username: this._user,
      password: this._pass,
    }
  }

  async throwsHelper(fn) {
    var assertArgs = Array.from(arguments).slice(1)

    var savedErr = null
    try {
      await fn()
    } catch (err) {
      savedErr = err
    }

    assert.throws(() => {
      if (savedErr) {
        throw savedErr
      }
    }, ...assertArgs)
  }

  genTestKey() {
    return this._testKey + '_' + this._testCtr++
  }

  async prepare() {
    var cluster = await this.newCluster()
    var bucket = cluster.bucket(this._bucket)
    var scope = bucket.defaultScope()
    var coll = bucket.collection(this._coll)
    var dcoll = bucket.defaultCollection()

    this._testCluster = cluster
    this._testBucket = bucket
    this._testScope = scope
    this._testColl = coll
    this._testDColl = dcoll
  }

  async newCluster(options) {
    if (!options) {
      options = {}
    }

    if (!options.connstr) {
      options.connstr = this._connstr
    }
    if (!options.username) {
      options.username = this._user
    }
    if (!options.password) {
      options.password = this._pass
    }

    return couchbase.Cluster.connect(options.connstr, options)
  }

  async cleanup() {
    this._testBucket = null
    this._testScope = null
    this._testColl = null
    this._testDColl = null

    if (this._testCluster) {
      // await this._testCluster.close()
      this._testCluster = null
    }
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  supportsFeature(feature) {
    var featureEnabled = undefined

    TEST_CONFIG.features.forEach((cfgFeature) => {
      if (cfgFeature.feature === '*' || cfgFeature.feature === feature) {
        featureEnabled = cfgFeature.enabled
      }
    })

    if (featureEnabled === true) {
      return true
    } else if (featureEnabled === false) {
      return false
    }

    switch (feature) {
      case ServerFeatures.KeyValue:
      case ServerFeatures.Ssl:
      case ServerFeatures.SpatialViews:
      case ServerFeatures.Subdoc:
      case ServerFeatures.Views:
      case ServerFeatures.Replicas:
        return true
      case ServerFeatures.Search:
      case ServerFeatures.Query:
      case ServerFeatures.BucketManagement:
      case ServerFeatures.Xattr:
      case ServerFeatures.GetMeta:
        // supported on all versions except the mock
        return !this._version.isMock
      case ServerFeatures.Analytics:
      case ServerFeatures.UserManagement:
        return !this._version.isMock && this._version.isAtLeast(6, 0, 0)
      case ServerFeatures.UserGroupManagement:
      case ServerFeatures.AnalyticsPendingMutations:
      case ServerFeatures.ServerDurability:
        return !this._version.isMock && this._version.isAtLeast(6, 5, 0)
      case ServerFeatures.Collections:
        return !this._version.isMock && this._version.isAtLeast(7, 0, 0)
      case ServerFeatures.PreserveExpiry:
        return !this._version.isMock && this._version.isAtLeast(7, 0, 0)
      case ServerFeatures.Eventing:
        return !this._version.isMock && this._version.isAtLeast(7, 0, 0)
      case ServerFeatures.Transactions:
        return !this._version.isMock && this._version.isAtLeast(7, 0, 0)
    }

    throw new Error('invalid code for feature checking')
  }

  requireFeature(feature, cb) {
    if (this.supportsFeature(feature)) {
      cb()
    }
  }

  skipIfMissingFeature(test, feature) {
    if (!this.supportsFeature(feature)) {
      /* eslint-disable-next-line mocha/no-skipped-tests */
      test.skip()
      throw new Error('test skipped')
    }
  }

  supportsForAwaitOf() {
    try {
      eval('(async function() { var y = []; for await (var x of y) {} })()')
      return true
    } catch (e) {
      return !(e instanceof SyntaxError)
    }
  }

  requireForAwaitOf(cb) {
    if (this.supportsForAwaitOf()) {
      cb()
    }
  }

  skipIfMissingAwaitOf() {
    if (!this.supportsForAwaitOf()) {
      /* eslint-disable-next-line mocha/no-skipped-tests */
      test.skip()
      throw new Error('test skipped')
    }
  }

  get lib() {
    return couchbase
  }

  get c() {
    return this._testCluster
  }
  get b() {
    return this._testBucket
  }
  get s() {
    return this._testScope
  }
  get co() {
    return this._testColl
  }
  get dco() {
    return this._testDColl
  }
}

var harness = new Harness()

// These are written as normal functions, not async lambdas
// due to our need to specify custom timeouts, which are not
// yet supported on before/after methods yet.
/* eslint-disable-next-line mocha/no-top-level-hooks */
before(function (done) {
  this.timeout(30000)
  harness.prepare().then(done).catch(done)
})
/* eslint-disable-next-line mocha/no-top-level-hooks */
after(function (done) {
  this.timeout(10000)
  harness.cleanup().then(done).catch(done)
})

/* eslint-disable-next-line mocha/no-exports */
module.exports = harness
'use strict'

const assert = require('chai').assert
const H = require('./protostellarHarness')

const errorTranscoder = {
  encode: () => {
    throw new Error('encode error')
  },
  decode: () => {
    throw new Error('decode error')
  },
}

var testObjVal = {
  foo: 'bar',
  baz: 19,
  c: 1,
  d: 'str',
  e: true,
  f: false,
  g: 5,
  h: 6,
  i: 7,
  j: 8,
  k: 9,
  l: 10,
  m: 11,
  n: 12,
  o: 13,
  p: 14,
  q: 15,
  r: 16,
  utf8: 'é',
}
var testUtf8Val = 'é'
var testBinVal = Buffer.from(
  '00092bc691fb824300a6871ceddf7090d7092bc691fb824300a6871ceddf7090d7',
  'hex'
)

function validateMutationToken(token) {
  const mut_token = token.toJSON()
  assert.isNumber(mut_token.partition_uuid)
  assert.isNumber(mut_token.sequence_number)
  assert.isNumber(mut_token.partition_id)
  assert.isString(mut_token.bucket_name)
}

function genericTests(collFn) {
  describe('#basic', function () {
    let testKeyA
    let testKeyUtf8
    let testKeyBin

    before(function () {
      testKeyA = H.genTestKey()
      testKeyUtf8 = H.genTestKey()
      testKeyBin = H.genTestKey()
    })

    after(async function () {
      try {
        await collFn().remove(testKeyA)
      } catch (e) {
        // nothing
      }
      try {
        await collFn().remove(testKeyUtf8)
      } catch (e) {
        // ignore
      }
      try {
        await collFn().remove(testKeyBin)
      } catch (e) {
        // ignore
      }
    })

    describe('#upsert', function () {
      it('should perform basic upserts', async function () {
        var res = await collFn().upsert(testKeyA, testObjVal)
        assert.isObject(res)
        assert.isOk(res.cas)
        validateMutationToken(res.token)
      })

      it('should upsert with UTF8 data properly', async function () {
        var res = await collFn().upsert(testKeyUtf8, testUtf8Val)
        assert.isObject(res)
        assert.isOk(res.cas)
      })

      it('should upsert with binary data properly', async function () {
        var res = await collFn().upsert(testKeyBin, testBinVal)
        assert.isObject(res)
        assert.isOk(res.cas)
      })

      it('should not crash on transcoder errors', async function () {
        await H.throwsHelper(
          async () => {
            await collFn().upsert(testKeyA, testObjVal, {
              transcoder: errorTranscoder,
            })
          },
          Error,
          'encode error'
        )
      })
    })

    describe('#get', function () {
      it('should perform basic gets', async function () {
        var res = await collFn().get(testKeyA)
        assert.isObject(res)
        assert.isOk(res.cas)
        assert.deepStrictEqual(res.content, testObjVal)
      })

      it('should fetch utf8 documents', async function () {
        var res = await collFn().get(testKeyUtf8)
        assert.isObject(res)
        assert.isOk(res.cas)
        assert.deepStrictEqual(res.content, testUtf8Val)
      })

      it('should fetch binary documents', async function () {
        var res = await collFn().get(testKeyBin)
        assert.isObject(res)
        assert.isOk(res.cas)
        assert.deepStrictEqual(res.content, testBinVal)
      })

      it('should not crash on transcoder errors', async function () {
        await collFn().upsert(testKeyA, testObjVal)

        await H.throwsHelper(
          async () => {
            await collFn().get(testKeyA, {
              transcoder: errorTranscoder,
            })
          },
          Error,
          'decode error'
        )
      })

      it('should perform basic gets with callback', function (callback) {
        collFn().get(testKeyA, (err, res) => {
          assert.isObject(res)
          assert.isOk(res.cas)
          assert.deepStrictEqual(res.content, testObjVal)
          callback(err)
        })
      })

      it('should perform errored gets with callback', function (callback) {
        collFn().get('invalid-key', (err, res) => {
          res
          assert.isOk(err)
          callback(null)
        })
      })
    })

    describe('#replace', function () {
      it('should replace data correctly', async function () {
        var res = await collFn().replace(testKeyA, { foo: 'baz' })
        assert.isObject(res)
        assert.isOk(res.cas)
        validateMutationToken(res.token)

        var gres = await collFn().get(testKeyA)
        assert.deepStrictEqual(gres.content, { foo: 'baz' })
      })

      // it('should cas mismatch when replacing with wrong cas', async function () {
      //   var getRes = await collFn().get(testKeyA)

      //   await collFn().replace(testKeyA, { foo: 'boz' })

      //   await H.throwsHelper(async () => {
      //     await collFn().replace(
      //       testKeyA,
      //       { foo: 'bla' },
      //       {
      //         cas: getRes.cas,
      //       }
      //     )
      //   }, H.lib.CasMismatchError)
      // })
    })

    describe('#remove', function () {
      it('should perform basic removes', async function () {
        var res = await collFn().remove(testKeyA)
        assert.isObject(res)
        assert.isOk(res.cas)
        validateMutationToken(res.token)
      })
    })

    describe('#insert', function () {
      let testKeyIns

      before(function () {
        testKeyIns = H.genTestKey()
      })

      it('should perform inserts correctly', async function () {
        var res = await collFn().insert(testKeyIns, { foo: 'bar' })
        assert.isObject(res)
        assert.isOk(res.cas)
        validateMutationToken(res.token)
      })

      it('should fail to insert a second time', async function () {
        await H.throwsHelper(async () => {
          await collFn().insert(testKeyIns, { foo: 'bar' })
        })
      })

      it('should remove the insert test key', async function () {
        await collFn().remove(testKeyIns)
      })
    })

  })
}

describe('#crud', function () {
  /* eslint-disable-next-line mocha/no-setup-in-describe */
  genericTests(() => H.dco)
})
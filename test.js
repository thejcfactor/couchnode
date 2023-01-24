const couchbase = require('./dist/couchbase')
// const couchbase = require('./dist/protostellar/couchbase')
// const couchbase = require('./dist/classic/couchbase')

const main = async () => {
    const connStr = 'couchbase://localhost'
    // const connStr = 'protostellar://10.66.166.137:18098'
    const cluster = await couchbase.connect(connStr,
    {
      username: 'Administrator',
      password: 'password'
    })
    
    const bucket = cluster.bucket('travel-sample')
    const scope = bucket.defaultScope()
    const collection = bucket.defaultCollection()
    const inventoryScope = bucket.scope('inventory')
    // const res = await collection.get('21st_amendment_brewery_cafe')
    // console.log(res)    
    // const mut = await collection.upsert('test-doc-1', {id:'test-doc-1', what:'Gee, I hope this works'})
    // const getRes = await collection.get('test-doc-1')
    // await collection.replace('test-doc-1', { what: 'This is a replace' })
    // try {
    //   await collection.replace('test-doc-1', { what: 'This is a replace' }, {cas: getRes.cas})
    // } catch(err) {
    //   //err.code, err.details, err.message, err.stack
    //   console.log(err)
    // }

    let queryStr = 'SELECT * FROM `travel-sample`.`inventory`.`airline` LIMIT 2;'
    let query_result = await cluster.query(queryStr)
    query_result.rows.forEach((row) => {
      console.log(row)
    })
    console.log(query_result.meta)

    queryStr = 'SELECT * FROM `travel-sample`.`inventory`.`airline` LIMIT 2;'
    query_result = await inventoryScope.query(queryStr)
    query_result.rows.forEach((row) => {
      console.log(row)
    })
    console.log(query_result.meta)
  }
  
(async () => {
    await main();
    console.log("Success! Exiting app.")
    process.exit(1)
})().catch(e =>{
    console.log('ERR: ', e)
    console.log("Exiting app.")
    process.exit(1)
});

// main()
// .catch((err) => {
//     console.log('ERR: ', err)
//     console.log("Exiting app...")
//     process.exit(1);
// })
// .then(() => {
//     console.log("Finished.  Exiting app...")
//     process.exit(1);
// })
var couchbase = require('./dist/couchbase')

const main = async () => {
    const cluster = await couchbase.connect('couchbase://127.0.0.1',
    {
      username: 'Administrator',
      password: 'password'
    });

    let res = await cluster.searchQuery(
        'test-search-index',
        couchbase.SearchQuery.term('home'),
        {
            facets: {
                Activity: new couchbase.TermSearchFacet('activity', 5),
            },
            limit: 5
        }
    );

    res.rows.forEach((row) => {
        console.log(row);
    })


  }

main()
.catch((err) => {
    console.log('ERR: ', err)
    console.log("Exiting app...")
    process.exit(1);
})
.then(() => {
    console.log("Finished.  Exiting app...")
    process.exit(1);
})
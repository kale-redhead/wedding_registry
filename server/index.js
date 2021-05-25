require('dotenv').config()
const massive = require('massive')

massive({
    connectionString: connection_string,
    ssl: {rejectUnauthorized: false}
})
    .then((db) => {
        app.set('db', db)
        console.log('db connected')
    })
    .catch(err => console.log(err))

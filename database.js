const mongoose = require('mongoose')

const dbConnectionString = {
    development: 'mongodb://localhost/quizlet',
    test: process.env.DB_CONNECTION_TEST,
    staging: process.env.DB_CONNECTION_STAGING,
    production: process.env.DB_CONNECTION_PRODUCTION
}

mongoose.connect(
    dbConnectionString[process.env.NODE_ENV || 'development'],
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
)
    .then(() => {
        console.log(`Database Connected`)
    })
    .catch(() => {
        process.exit(1)
    })


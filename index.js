const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 8000
require('dotenv').config()

// initialize Mongoose Connection
require('./database.js')

//express middleware
app.use(express.json())
app.use(
    express.urlencoded({ extended: false})
)

//Use Logger
app.use(morgan('tiny'))

//require Router
const router = require('./router.js')
app.use('/v1', router)

//test root endpoint
app.get('/', function(req, res){
    res.status(200).json({
        status: true,
        data: "Welcome to API"
    })
})


//Exception Handler
const {
    notFound,
    internalServerError
} = require('./exceptionHandler.js')
app.use(notFound)
app.use(internalServerError)

//nyalain server
app.listen(port, () => {
    console.log(`Server started at ${Date()}`)
    console.log(`Listening on port ${port}!`)
})

module.exports = app
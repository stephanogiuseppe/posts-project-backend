const express = require('express')
const mongoose = require('mongoose')

const app = express()

const ROUTES_PATH = './routes'
const CONNECTION_URI =
  'mongodb+srv://dbUser:dbUser@clusterpostsproject' +
  '-3jqwe.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URI, {
  useNewUrlParser: true
})

app.use(require(ROUTES_PATH))

app.listen(3333)

const express = require('express')
const mongoose = require('mongoose')

const app = express()
const connectionURI =
  'mongodb+srv://dbUser:dbUser@clusterpostsproject' +
  '-3jqwe.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(connectionURI, {
  useNewUrlParser: true
})

app.get('/', (req, res) => {
  return res.send(`Hello ${req.query.name}`)
})

app.listen(3333)

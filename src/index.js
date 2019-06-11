const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

const ROUTES_PATH = './routes'
const FILE_PATH = '/files'
const CONNECTION_URI =
  'mongodb+srv://dbUser:dbUser@clusterpostsproject' +
  '-3jqwe.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true })

app.use((req, res, next) => {
  req.io = io
  next()
})

app.use(cors())

app.use(
  FILE_PATH,
  express.static(path.relative(__dirname, '..', 'uploads', 'redized'))
)

app.use(require(ROUTES_PATH))

server.listen(3333)

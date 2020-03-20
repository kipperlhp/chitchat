const express = require('express')
const http = require('http')
const socketIo = require("socket.io")

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const port = process.env.PORT || 3000

app.get('/', (req, res, next) => {
  res.status(200).send('<h1>Hello</h1>')
})

io.on('connection', (socket) => {
  console.log(`user ${socket.id} connected`)
  socket.on('disconnect', () => {
    console.log(`user ${socket.id} disconnected`)
  })
})

// use server.listen instead of app.listen
server.listen(port, () => {
  console.log(`env: ${process.env.NODE_ENV}, listening on port ${port}...`)
})

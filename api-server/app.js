const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const Message = require('./models/message')
const User = require('./models/user')

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
}

const port = process.env.PORT || 3000

let activeUsers = []
const systemUser = new User(0, 'SYSTEM')

app.get('/', (req, res, next) => {
  res.status(200).send('<h1>Hello</h1>')
})

io.on('connection', (socket) => {
  const user = new User(socket.id)
  activeUsers.push(user)
  console.log(`user ${user.name} connected,\ntotal users: ${activeUsers.length}`)
  const connectionMsg = new Message(systemUser, `user ${user.name} joins the chat,\ntotal users: ${activeUsers.length}`)
  io.emit('receiveMessage', connectionMsg)

  socket.on('sendMessage', (message) => {
    const msg = new Message(user, message)
    io.emit('receiveMessage', msg)
  })

  socket.on('updateUserName', (newName) => {
    user.updateName(newName)
  })

  socket.on('disconnect', () => {
    activeUsers = activeUsers.filter((u) => u.id !== user.id)
    console.log(`user ${user.name} disconnected,\ntotal users: ${activeUsers.length}`)
    const disconnectionMsg = new Message(systemUser, `user ${user.name} leaves the chat,\ntotal users: ${activeUsers.length}`)
    io.emit('receiveMessage', disconnectionMsg)
  })
})

// use server.listen instead of app.listen
server.listen(port, () => {
  console.log(`env: ${process.env.NODE_ENV}, listening on port ${port}...`)
})

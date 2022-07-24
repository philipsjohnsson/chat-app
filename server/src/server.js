import express from 'express'
import 'dotenv/config' // För att env-filen ska funka lokalt.
import { createServer } from 'node:http'
import { Server } from 'socket.io'
import cors from 'cors'

try {
  const app = express()
  // console.log(app)

  const httpServer = createServer(app)
  console.log(httpServer)

  

  const io = new Server(httpServer, {
    cors: { // makes service available for client
      origin: 'http://localhost:3000',
      methods: ["GET", "POST"]
    }
  })

  app.use(cors())
  app.set('socket.io', io)

  // console.log(io)

  io.on('connection', (socket) => {
    console.log('socket.io: connected')
    // console.log(socket)
    console.log(socket.id)
    setInterval(() => {
      socket.emit('heartbeat', 'heartbeat')
    }, 5000)
  })

  // console.log(io)
  

  httpServer.listen(process.env.port, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`)
    console.log('Press Ctrl-C to terminate...')
  })
    console.log(process.env.port)
} catch (err) {
    console.log(err)
}
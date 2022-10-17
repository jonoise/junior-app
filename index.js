import express from 'express'
import http from 'http'
import cors from 'cors'

const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 4000
app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Hello, Juniors 🪴</h1>')
})

server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`)
})

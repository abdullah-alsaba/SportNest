import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

connectDB()

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true,
  }),
)
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('SportNest API')
})

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'SportNest API is running' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

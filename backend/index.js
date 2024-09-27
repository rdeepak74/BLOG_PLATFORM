import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth.routes.js'
import { ApiError } from './utils/apiError.js'

dotenv.config()
connectDB()
const app = express()
const PORT = process.env.PORT || 4002
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Routes
app.use('/api/auth', authRoutes)

app.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors,
    })
  } else {
    console.log(err)
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    })
  }
})

app.listen(PORT, () => {
  console.log('server is running on port 4001')
})

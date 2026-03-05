import express from 'express'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
app.use(cors())

// Serve static files from dist (built React app)
app.use(express.static(join(__dirname, 'dist')))

// API endpoint for episode randomization (optional backend logic)
app.get('/api/random-episode', (req, res) => {
  res.json({
    message: 'Use the frontend logic for episode randomization'
  })
})

// Fallback to index.html for React Router
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

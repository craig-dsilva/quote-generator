import express from 'express'

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Express!' })
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
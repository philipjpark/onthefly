import express from 'express'
import cors from 'cors'

// create express app
const app = express()

app.use(express.json())
app.use(cors())

// Define a route handler for a GET request at / that responds with a status code 200
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">✈️ On the Fly API</h1>')
});

// Start the server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
})


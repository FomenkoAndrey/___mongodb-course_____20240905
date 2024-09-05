import express from 'express'
import { MongoClient } from 'mongodb'
import { CONFIG } from '../config.mjs'

const app = express()
const PORT = 3000
const URI = CONFIG.URI // 'mongodb+srv://username:password@cluster0.rn9rilw.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(URI)

async function run() {
  try {
    await client.connect()
    console.log('Connected to Database')

    const result = await client.db('testDB').command({ ping: 1 })
    console.log('MongoDB responded:', result)

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

run().catch(console.dir)

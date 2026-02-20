import express from 'express'
const app = express()
const auth = (req, res, next) => {
  res.send('Hello Baby')
}

app.get('/', (req, res) => {
  res.send('Welcome')
})

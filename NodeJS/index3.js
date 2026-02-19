import express from 'express'
const app = express()
app.listen(8080, () => {
  console.log('Server started')
})
app.get('/', (req, res) => {
  res.send('Hi Baby')
})
app.get('/home', (req, res) => {
  res.send('Hi Latent')
})
app.get('/home/page1', (req, res) => {
  res.send('Hi Latent why Here')
})

import express from 'express'
const app = express()
app.listen(8080, () => {
  console.log('Server started')
})
app.get('/', (req, res) => {
  console.log(req.url)
  res.send('Hi Baby')
})
app.get('/home', (req, res) => {
  console.log(req.url)
  res.send('Hi Latent')
})
app.get('/home/page1', (req, res) => {
  console.log(req.url)
  console.log(req.method)
  console.log(req.body)
  console.log(req.headers.authorization)
  res.send('Hi Latent why Here')
})

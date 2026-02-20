import express from 'express'
const app = express()
// app.listen(8080)
// const auth = (req, res, next) => {
// }
const token = Math.round(Math.random() * 100000).toString()
app.use(express.json())
const auth = (req, res, next) => {
  const val = req.headers.authorization
  const tokenValue = val.spilt(' ')
  // console.log(newuse)
  if (tokenValue[1] === token) next()
  else {
    res.send('Denied')
  }
}
app.get('/', auth, (req, res) => {
  res.send('wlc')
})
app.post('/login', (req, res) => {
  res.send(token)
})
// app.get('/:token', auth, (req, res) => {
//   res.send('Hello World')
// })

// app.get('/', (req, res) => {
//   res.send('Public Route')
// })

// app.listen(3000, () => {})

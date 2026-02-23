import express from 'express'
const app = express()
app.use(express.json())
// app.listen(8080)
// const auth = (req, res, next) => {
// }
const jwt = Math.random().toString(36).substring(2)
const auth = (req, res, next) => {
  const token = req.headers.authorization
  const val = token.spilt(' ')
  // console.log(newuse)

  if (val[1] === jwt) {
    next()
  } else {
    res.send('Denied')
  }
}

app.get('/:token', auth, (req, res) => {
  res.send('Hello World')
})
app.use(auth)

// app.post('/1234', (req, res) => {
//   const newUser = req.body
//   user.push(newUser)
//   res.json(user)
// })

// const auth = (req, res, next) => {
//   const { token } = req.params

//   if (token === '1234') {
//     next()
//   } else {
//     res.send('Not Authorised')
//   }
// }

// app.get('/:token', auth, (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/', (req, res) => {
//   res.send('Welcome')
// })

// app.listen(8081, () => {
//   console.log('Server is running on port 8081')
// })

// import express from 'express'
// const app = express()
// const token = Math.round(Math.random() * 100000).toString()
// app.use(express.json())

// const auth = (req, res, next) => {
//   const val = req.headers.authorization
//   const tokenValue = val.split(' ')
//   if (tokenValue[1] === token) next()
//   else res.send('unauthrized')
// }
// app.get('/', auth, (req, res) => {
//   res.send('Welcome')
// })
// app.post('/login', (req, res) => {
//   res.send(token)
// })
// app.listen(8080, () => {
//   console.log('server is live')
// })

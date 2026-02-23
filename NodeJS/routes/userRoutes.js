import express from 'express'
const userRouter = express.Router()
userRouter.get('/', (req, res) => {
  res.send('This is request of user router')
})

userRouter.post('/', (req, res) => {
  res.send('This is post request of user router')
})


import express from 'express'
const userRouter = express.Router()
productRouter.get('/', (req, res) => {
  res.send('This is request of product router')
})

productRouter.post('/', (req, res) => {
  res.send('This is post request of product router')
})

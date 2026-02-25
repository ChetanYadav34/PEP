import express from 'express'
import dbConnect from './config/db.js'
import userRouter from './Routes/userRoute.js'
const app = express()
const startServer = async () => {
  await dbConnect()
  app.listen(8080, () => console.log('Server started'))
}
startServer()
app.use(express.json())
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

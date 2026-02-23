// router
import express from 'express'
const app = express()
app.listen(8080, () => console.log('Server started'))
const Router = express.Router()
userRouter.get('/', (req, res) => {
  res.send('Hello World')
})

userRouter.post('/', (req, res) => {
  res.send('This is post request')
})

productRouter.get('/', (req, res) => {
  res.send('This is get request of product router')
})

productRouter.post('/', (req, res) => {
  res.send('This is post request')
})

// //router
// import express from "express"
// import userRouter from "./routes/userRoutes.js"
// import productRouter from "./routes/productRoutes.js"
// const app = express()
// app.listen(8080,()=>console.log("Server started"))
// app.use("/api/users",userRouter)
// app.use("/api/products",productRouter)

import express from 'express'
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

const dbConnect = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
}

const startServer = async () => {
  await dbConnect()
  app.listen(8080, () => console.log('Server started'))
}

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
})

const products = [
  { id: 1, name: 'Product 1', price: 34 },
  { id: 2, name: 'Product 2', price: 30 },
  { id: 3, name: 'Product 3', price: 50 },
]

app.get('/', (req, res) => {
  // res.json({ message: "Hello World" });
  res.render('index', { name: 'John' })
})

app.get('/products', (req, res) => {
  res.render('products', { products })
})

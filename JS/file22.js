const products = [
  {
    id: 1,
    name: 'Product 1',
    desc: 'This is description',
    price: 100,
    category: 'Laptop',
  },
  {
    id: 2,
    name: 'Product 2',
    desc: 'This is description',
    price: 120,
    category: 'Desktop',
  },
  {
    id: 3,
    name: 'Product 3',
    desc: 'This is description',
    price: 150,
    category: 'Laptop',
  },
  {
    id: 4,
    name: 'Product 4',
    desc: 'This is description',
    price: 100,
    category: 'Laptop',
  },
  {
    id: 5,
    name: 'Product 5',
    desc: 'This is description',
    price: 120,
    category: 'Desktop',
  },
  {
    id: 6,
    name: 'Product 6',
    desc: 'This is description',
    price: 150,
    category: 'Laptop',
  },
]
const cart = []
function addToCart(productid) {
  const product = products.find((product) => product.id === productid)
  // cart.push(products.find((product) => product.id === productid))
  cart.push({ ...product, quantity: 1 })
}
function increment(productid) {
  const item = cart.find((product) => product.id === productid)
  item.quantity++
}
function decrement(productid) {
  const item = cart.find((product) => product.id === productid)
  item.quantity--
}
const userEmail = 'john@gmail.com'
function calculateTotal() {
  let total = 0
  for (let item of cart) {
    productTotal = item.price * item.quantity
    total += item.price * item.quantity
  }
  return total
}
function placeOrder() {
  if (cart.length === 0) {
    console.log('Cart is empty')
    return
  }
  const total = calculateTotal()

  const order = {
    email: userEmail,
    items: cart,
    orderValue: total,
    totalValue: productTotal,
  }
  console.log('Order placed successfully')
  console.log(order)
  console.log('product total', productTotal)
  console.log('Total order value', total)
}
addToCart(1)
addToCart(3)
addToCart(5)
console.log(cart, '\n')
increment(1)
increment(5)
console.log(cart)
decrement(1)
console.log(cart)
decrement(1)
// console.log(cart)
placeOrder()
// console.log(products)
products.forEach((product) =>
  console.log(product.id, product.name, product.desc, product.category),
)
console.log('-----------------')
addToCart(1)
addToCart(3)
addToCart(5)

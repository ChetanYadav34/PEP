// const products = ['product1', 'product2', 'product3']
// store Id, name , price and description of products in an array of objects
const products = [
  { id: 1, name: 'Product 1', desc: 'This is description', price: 1000 },
  { id: 2, name: 'Product 2', desc: 'This is description', price: 1200 },
  { id: 3, name: 'Product 3', desc: 'This is description', price: 1500 },
]

// let cart = []
// products.forEach((product) => {
//   const obj = {
//     ...product,
//     quantity: 1,
//     total: product.price * product.quantity,
//   }
//   cart = [...cart, product]
// })
// console.log(cart)

const cart = products.map((product) => {
  const obj = {
    ...product,
    quantity: 1,
    total: product.price * product.quantity,
  }
  return obj
})
console.log(cart)

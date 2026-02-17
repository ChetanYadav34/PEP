function makePayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Payment has been processed')
      resolve('some error')
    }, 5000)
  })
}

function sendConfirmation() {
  console.log('Order has been placed successfully')
}

makePayment()
  .then(() => sendConfirmation())
  .catch((err) => console.log(err))

function makePayment(f) {
  setTimeout(() => {
    console.log('Payment has been processed')
    f()
  }, 5000)
}
function sendConfirmation() {
  console.log('Order has been placed successfully')
}
makePayment(sendConfirmation)
// sendConfirmation()

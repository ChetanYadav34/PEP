import express, { request, response } from 'express'
const app = express()
app.listen(8080, () => {
  console.log('Server Started....')
})

app.get('/:id', (request, response) => {
  // http://localhost:8080/10
  console.log(request.url)
  console.log(request.params)
  response.send(request.params.id)
})

app.get('/:id/:email', (request, response) => {
  //http://localhost:8080/10/abc@gmail.com
  console.log(request.url)
  console.log(request.params)
  response.send(request.params.id + request.params.email)
})

app.get('/id/:id/email/:email', (request, response) => {
  //http://localhost:8080/id/10/email/abc@gmail.com
  console.log(request.url)
  console.log(request.params)
  response.send(request.params.id + request.params.email)
})

app.get('/home', (request, response) => {
  // console.log(request.url)
  response.send('Hello World..!!')
})

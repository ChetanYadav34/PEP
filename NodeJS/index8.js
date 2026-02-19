import express from 'express'
const app = express()
app.listen(8080)
const users = [
  { id: 1, name: 'john', email: 'john@gmail.com', role: 'student' },
  { id: 2, name: 'john', email: 'john@gmail.com', role: 'student' },
  { id: 3, name: 'john', email: 'john@gmail.com', role: 'student' },
]
// app.get("/",( req, res )=>{
//     res.json(users);

// })
app.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const user = users.find((u) => u.id === id)

  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }
  res.json(user)
})

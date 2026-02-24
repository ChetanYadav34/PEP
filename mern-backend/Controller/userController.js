import userModel from 'mern-backend/Models/userModel.js'
const addUser = async (req, res) => {
  const result = await userModel.create(req.body)
  res.json(result)
}
const showUsers = async (req, res) => {
  const result = await userModel.find()
  res.json(result)
}
const deleteUser = async (req, res) => {
  const id = req.params.id
  const result = await userModel.findByIdAndDelete(id)
  res.json(result)
}
const login = async (req,res) => {
    const 
    const
}
export { addUser, showUsers, deleteUser }

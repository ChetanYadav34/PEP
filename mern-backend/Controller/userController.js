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
const signup = async (req, res) => {
  const hashPassword = await bcrypt.hash(body.password,)
  body.password = hashPassword
  const result = await
}
const login = async (req,res) => {
    const {email, password} = req.body 
    const found = userModel.findOne({email})
      try{

    }catch(err){
      console.log(err)

    }
}
export { addUser, showUsers, deleteUser }

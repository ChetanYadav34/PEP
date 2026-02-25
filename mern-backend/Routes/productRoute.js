import {
  addUser,
  deleteUser,
  login,
  showUsers,
} from '../controllers/userController.js'
import { authenticate, authorize } from '../Middleware/auth.js'
import express from 'express'
const productRouter = express.Router()
productRouter.get('/', authenticate, authorize('admin'), showUsers)
productRouter.post('/add', login)
productRouter.post('/signup', addUser)
productRouter.delete('/:id', authenticate, authorize('admin'), deleteUser)

export default productRouter

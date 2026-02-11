//
db.employees.find({ department: 'HR' })

db.employees.find({ department: { $eq: 'HR' } })

db.employees.find({ salary: { $eq: 3000 } })

db.employees.find({ salary: { $gt: 3000 } })

db.employees.find({ salary: { $gte: 3000 } })

db.employees.find({ salary: { $ne: 3000 } })

db.employees.find({ $and: [{ department: 'HR' }, { salary: { $gt: 3000 } }] })

db.employees.find(
  { $or: [{ department: 'HR' }, { salary: { $gt: 3000 } }] },
  { name: 1, email: 1, department: 1 },
)

db.employees.updateOne({ email: 'cathy@gmail.com' }, { $inc: { salary: 3500 } })

db.employees.updateOne({}, { $inc: { salary: 1000 } })

db.employees.updateMany({}, { $inc: { salary: 1000 } })

db.employees.updateMany({}, { $set: { points: 1 } })

db.employees.deleteOne({ email: 'abc@gmail.com' })

db.employees.deleteMany({ email: 'abc@gmail.com' })

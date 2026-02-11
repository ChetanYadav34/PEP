db.employees.find({ location: 'FL' })

db.employees.updateOne(
  { email: 'mike@gmail.com' },
  { $push: { location: 'AZ' } },
)

db.employees.updateOne({ email: 'mike@gmail.com' }, { $pop: { location: 1 } })

db.employees.updateOne({}, { $set: { skills: 'Python' } })

db.employees.updateOne(
  { email: 'cathy@gmail.com' },
  { $push: { skills: '.NET' } },
)

db.employees.updateMany(
  { email: 'cathy@gmail.com' },
  { $addToSet: { skills: 'Java' } },
)

db.employees.updateOne(
  { email: 'cathy@gmail.com' },
  { $pull: { skills: 'Python' } },
)


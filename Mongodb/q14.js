db.employees.find({}, { name: 1, department: 1 })

db.employees.find({}, { name: 1, dept: '$department' })

db.employees.find({}, { name: 1, dept: '$department' })

db.employees.insertOne({
  name: 'Yash',
  age: 20,
  address: { addr1: '50 Vverdin Ct', city: 'Columbus', state: 'OH' },
})

db.employees.insertOne({
  name: 'Chetan',
  age: 22,
  address: { addr1: '23 Disney Land', city: 'New York', state: 'America' },
})

db.employees.insertOne({
  name: 'Jasmin',
  age: 16,
  address: { addr1: 'mc queen', city: 'London', state: 'England' },
})

db.employees.find({}, { name: 1, age: 1, 'address.city': 1 })

db.employees.find({}, { name: 1, age: 1, city: '$address.city' })
db.employees.find(
  {},
  { name: 1, age: 1, city: 'address.city', state: '$address.state' },
)

//Add Skills array for all users
//and populate Java, Python

db.employees.updateMany({}, { $push: 'Java' })

db.employees.updateOne({ name: 'Ria' }, { $addToSet: { Skills: '.NET' } })

db.employees.updateOne({})

db.employees.find({}, { _id: 0, name: 1, Skills: 1 })

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      skills: 1,
    },
  },
])

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      skills: 1,
    },
  },
  { $unwind: '$skills' },
])

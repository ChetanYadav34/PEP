db.createCollection('vendors', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'age'],
    },
  },
})

db.vendors.insertOne({
  name: 'John',
  age: 21,
})

db.vendors.insertOne({
  age: 21,
})

db.vendors.insertOne({
  name: 'abcd',
  age: 24,
})

db.vendors.drop()

db.createCollection('vendors', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'age'],
      properties: {
        name: { bsonType: 'string' },
        age: { bsonType: ['int', 'null'] },
      },
    },
  },
})
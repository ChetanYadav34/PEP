//Create folder mongo-replica
//Create folders - usa, uk, india
//inside mongo-replica folder

//mongod -replSet rs1 --dbpath "D:\Study\SEM 6\CSES009\MERN\Mongo_replica\USA" --port 27018

//mongod -replSet rs1 --dbpath "D:\Study\SEM 6\CSES009\MERN\Mongo_replica\UK" --port 27019

//mongod -replSet rs1 --dbpath "D:\Study\SEM 6\CSES009\MERN\Mongo_replica\India" --port 27020

//mongosh --port 27018

rs.initiate({
  _id: 'rs1',
  members: [
    { _id: 0, host: 'localhost:27018' },
    { _id: 1, host: 'localhost:27019' },
    { _id: 2, host: 'localhost:27020' },
  ],
})

rs.initiate({
  _id: 'rs1',
  members: [
    { _id: 0, host: '127.0.0.1:27018' },
    { _id: 1, host: '127.0.0.1:27019' },
    { _id: 2, host: '127.0.0.1:27020' },
  ],
})

//rs.config()
//rs.status()

//mongosh "mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1:27020/?replicaSet=rs1"

//use mydatabase

db.users.insertOne({
  name: 'Sumanth',
  age: 21,
})

db.users.insertOne({
  name: 'Aman',
  age: 23,
})
db.getMongo().setReadPref('secondary')

db.shutdownServer()

db.customers.insertOne({ _id: 'c1', name: 'John', balance: 1000 })

db.customers.insertOne({ _id: 'c2', name: 'Mike', balance: 1000 })

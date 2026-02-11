//user
//mongosh --username admin -authenticationDatabase admin

db.createUser({
  user: 'admin',
  pwd: 'admin123',
  roles: [
    {
      role: 'userAdminAnyDatabase',
      db: 'admin',
    },
  ],
})

db.createUser({
  user: 'user1',
  pwd: 'user1',
  roles: [
    {
      role: 'read',
      db: 'lpu26a',
    },
  ],
})

db.createUser({
  user: 'user2',
  pwd: 'user2',
  roles: [
    {
      role: 'read',
      db: 'lpu26a',
    },
  ],
})


//connection string
// mongosh "mongodb://user1:user1@localhost:27017/lpu26a"

//10.10.10.10 - mongodb

//10.12.100.1 - nodejs app

//mongosh "mongodb://10.10.10.10:27017"

//mongosh "mongodb://admin:admin@10.10.10.10:27017"
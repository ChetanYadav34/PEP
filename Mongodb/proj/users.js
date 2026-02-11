//users collection
db.users.insertOne({
  _id: 'u1',
  name: 'Rahul Dev',
  email: 'rahul@gmail.com',
  password: '1234',
  role: 'student', // student | instructor | admin
})

db.users.insertOne({
  _id: 'u2',
  name: 'Aryan',
  email: 'aryan@gmail.com',
  password: '1234',
  role: 'instructor', // student | instructor | admin
})

db.users.insertOne({
  _id: 'u3',
  name: 'admin',
  email: 'admin@gmail.com',
  password: '1234',
  role: 'admin', // student | instructor | admin
})

db.users.find({
  email: 'shubam@gmail.com',
  password: '1234',
})
//display all courses
db.courses.find()

//show all modules of c1
db.modules.find({
  courseId: 'c1',
})

//show all lessons of m1
db.lessons.find({
  moduleId: 'm1',
})
//enroll u1 to c1
db.enrollments.insertOne({
  studentId: 'u1',
  courseId: 'c1',
})
//mark l1 complete when u1 hits complete button
db.lessonsprogress.updateOne({
  studentId: 'u1',
  lessonId: 'l1',
  isCompleted: true,
})

//check whether l1 is completed or not
db.lessonsprogress.find({
  studentId: 'u1',
  lessonId: 'l1',
})

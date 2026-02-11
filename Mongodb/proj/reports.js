db.courses.aggregate([
  {
    $lookup: {
      from: 'modules',
      localField: '_id',
      foreignField: 'courseId',
      as: 'modules',
    },
  },
  {
    $unwind: '$modules',
  },
  {
    $project: {
      _id: 0,
      CourseId: '$_id',
      CourseTitle: '$title',
      ModuleTitle: '$modules.title',
    },
  },
])

db.courses.aggregate([
  {
    $lookup: {
      from: 'modules',
      localField: '_id',
      foreignField: 'courseId',
      as: 'modules',
    },
  },
  {
    $unwind: '$modules',
  },
  {
    $project: {
      _id: 0,
      CourseId: '$_id',
      CourseTitle: '$title',
      ModuleTitle: '$modules.title',
    },
  },
])

db.enrollments.aggregate([
  {
    $lookup: {
      from: 'users',
      localField: '_id',
      foreignField: 'courseId',
      as: 'users',
    },
  },
])

db.courses.aggregate([
  {
    $lookup: {
      from: 'modules',
      let: { uid: '$_id' },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ['$_id', '$$courseID'] },
          },
        },
      ],
      as: 'modules',
    },
  },
])

db.users.insertOne({
  _id: 'u4',
  name: 'Saurav',
  email: 'saurav@gmail.com',
  password: '4321',
  role: 'student',
})

db.enrollments.insertOne({
  studentId: 'u4',
  courseId: 'c2',
})


db.enrollments.aggregate([
  {
    $lookup: {
      from: 'enrollments',
      localField: '_id',
      foreignField: 'courseId',
      as: 'users',
    },
  },
])


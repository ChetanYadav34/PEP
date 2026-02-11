db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
        $cond: [{ $gt: ['$salary', 4500] }, 'Grade A', 'Grade B'],
      },
    },
  },
])

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
        $cond: {
          if: { $gt: ['$salary', 3000] },
          then: 'Grade A',
          else: 'Grade B',
        },
      },
    },
  },
])

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      grade: {
        $switch: {
          branches: [
            { case: { $gt: ['$salary', 3000] }, then: 'Grade A' },
            { case: { $gt: ['$salary', 2000] }, then: 'Grade B' },
          ],
          default: 'Grade C',
        },
      },
    },
  },
])

db.orders.insertOne({
  empid: ObjectId('69817ec0d49d3adb3b628ca0'),
  product: 'desktop',
  orderValue: 21000,
})


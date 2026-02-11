db.orders.aggregate([
  {
    $project: {
      _id: 0,
      empid: 1,
      orderValue: 1,
    },
  },
])

db.orders.aggregate([
  {
    $lookup: {
      from: 'employees',
      localField: 'empid',
      foreignField: '_id',
      as: 'users',
    },
  },
])

db.orders.aggregate([
  {
    $lookup: {
      from: 'employees',
      localField: 'empid',
      foreignField: '_id',
      as: 'orders',
    },
  },
  { $unwind: '$orders' },
])

db.orders.aggregate([
  {
    $lookup: {
      from: 'employees',
      localField: 'empid',
      foreignField: '_id',
      as: 'orders',
    },
  },
  { $unwind: '$orders' },
  {
    $project: {
      name: 1,
      orders: 1,
    },
  },
])

db.orders.aggregate([
  {
    $lookup: {
      from: 'employees',
      localField: 'empid',
      foreignField: '_id',
      as: 'orders',
    },
  },
  { $unwind: '$orders' },
  {
    $project: {
      name: 1,
      product: '$orders.product',
      orderValue: '$orders.orderValue',
    },
  },
])

db.employees.aggregate([
  {
    $lookup: {
      from: 'orders',
      let: { uid: '$_id' },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ['$_id', '$$uid'] },
          },
        },
      ],
      as: 'orders',
    },
  },
])

db.employees.aggregate([
  {
    $lookup: {
      from: 'orders',
      let: { uid: '$_id' },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ['$_id', '$$uid'] },
          },
        },
      ],
      as: 'orders',
    },
  },
  {
    $project: {
      name: 1,
      product: '$orders.product',
      orderValue: '$orders.orderValue',
    },
  },
])

db.employees.aggregate([
  {
    $lookup: {
      from: 'orders',
      let: { uid: '$_id' },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ['$empid', '$$uid'] },
          },
        },
        {
          $project: {
            _id: 0,
            empid: 1,
            product: 1,
            orderValue: 1,
          },
        },
      ],
      as: 'orders',
    },
  },
])

db.employees.aggregate([
  {
    $lookup: {
      from: 'orders',
      let: { uid: '$_id' },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ['$empid', '$$uid'] },
          },
        },
        {
          $project: {
            _id: 0,
            empid: 1,
            product: 1,
            orderValue: 1,
          },
        },
      ],
      as: 'orders',
    },
  },
])

db.empdetails.insertOne({
  empid: ObjectId('69817ec0d49d3adb3b628ca0'),
  city: 'Hyderabad',
  state: 'Telangana',
})


db.employees.aggregate(
  {
    $lookup: {
      from: 'orders',
      localField: '_id',
      foreignField: 'empid',
      as: 'o',
    },
  },
  { $unwind: '$o' },
  {
    $project: {
      _id: 0,
      name: 1,
      email: 1,
      department: 1,
      product: '$o.product',
      orderValue: '$o.orderValue',
    },
  },
  { $out: 'OrderReport' },
)


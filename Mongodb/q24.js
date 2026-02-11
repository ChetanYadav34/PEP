//login into replicaset

//created hdfcbank database

//const session = db.getMongo().startSession()

//session.startTransaction()

//var custCollection = session.getDatabase("hdfcbank").customers

db.custCollection.updateOne({ _id: 'c1' }, { $inc: { balance: -100 } })


cls

db.customers.drop()

db.customers.updateMany({ name: 'John' }, { $set: { name: 'Andrey' } }, { upsert: true })

db.customers.find()

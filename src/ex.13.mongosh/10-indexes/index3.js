load('../random.js')

db.customers.drop()

db.createCollection('customers')

db.customers.insertMany(getUsers(10))

cls

db.customers.createIndex({ firstName: 1 })

db.customers.getIndexes()

db.customers.createIndex({ firstName: 1 })

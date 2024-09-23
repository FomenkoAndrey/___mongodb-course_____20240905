load('../random.js')

db.customers.drop()

db.createCollection('customers')

db.customers.insertMany(getUsers(10000))

cls

db.customers.createIndex({ '$**': 'text' })

// prettier-ignore
db.customers.find(
    {$text: {$search: 'John Smith'}},
    {score: {$meta: 'textScore'}}
).sort(
    {score: {$meta: 'textScore'}}
).limit(5)

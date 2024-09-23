cls

db.users.drop()
db.customers.drop()

db.createCollection('users')
db.getCollectionNames()

db.users.renameCollection('customers')
db.getCollectionNames()

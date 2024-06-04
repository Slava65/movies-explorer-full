db=db.getSiblingDB('admin');
db.auth('username','password')
db=db.getSiblingDB('bitfilmsdb')
db.createUser({
    'user': "user",
    'pwd': "user",
    'roles': [{
        'role': 'dbOwner',
        'db': 'bitfilmsdb'
    }]
})
db.createCollection('movies');
db.createCollection('users')
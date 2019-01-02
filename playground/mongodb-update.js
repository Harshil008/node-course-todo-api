//const MongoClient = require('mongodb').MongoClient;
                      //or
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to server',err);
  }
  console.log('Connected to MongoDB server');
  //findOneAndUpdate
  //
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c2c90c418c3436ac0609e2f')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // });

  // #Challenge

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c2c58e01217174614391b5d')
  },{
    $set: {
      name: 'Rajesh'
    }, $inc: {
      age: 2
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });
   db.close();
 });

//const MongoClient = require('mongodb').MongoClient;
                      //or
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to server',err);
  }
  console.log('Connected to MongoDB server');

  //deleteMany

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
  //   console.log(res);
  // });

  //findOneAndDelete

  // db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res);
  // });

  // #Challenge

  // db.collection('Users').deleteMany({name: 'Rajesh'}).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5c2c5a921a345205502d0f58')
  }).then((res) => {
    console.log(res);
  });
   db.close();
 });

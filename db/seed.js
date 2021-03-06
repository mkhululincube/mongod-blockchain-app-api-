const mongoose = require('mongoose');
const config = require('config');


// =============================================================================
// MODELS

const User = require('../models/user');


// =============================================================================
// MONGO CONNECTION

console.log('===== DB: CONNECT =====');

// const { port, db, secret }    = require('../config/env');
mongoose.Promise = global.Promise;
mongoose.connect(config.database.url);


// =============================================================================
// DROP DATA

console.log('===== DROPPING DATA =====');

User.collection.drop();


// =============================================================================
// CREATE DATA

const createUsers = () => {
  return User.create([{
    username: 'admin',
    email: 'mkayz89@email.com',
    password: 'admin'
  }]);
};


console.log('===== CREATING DATA =====');

const createData = async () => {
  await createUsers();
  mongoose.disconnect();
};

createData();


// =============================================================================
// CLOSE MONGO CONNECTION

// console.log('===== DB: DISCONNECT =====');

// mongoose.connection.close();
// mongoose.disconnect();

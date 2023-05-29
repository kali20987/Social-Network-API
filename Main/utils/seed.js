const connection = require('../config/connection');
const { Thought, User } = require('../models');
const {
  getRandomUsers
} = require('./data');


connection.once('open', async () => {

  await User.collection.insertMany(users);

  await Thought.collection.insertMany(thoughts);

});
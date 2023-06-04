const { UserModel } = require('../models');

const userData = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

const seedUsers = async () => {
  await UserModel.bulkCreate(userData);
};

module.exports = seedUsers;

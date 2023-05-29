const thoughts = [
    'what a great website'
];

const users = [
   'kali20987',
   '1234'
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsers = () =>
  `${getRandomArrItem(users)} ${getRandomArrItem(users)}`;

  module.exports = {
    getRandomUsers
  };
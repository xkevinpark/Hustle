// require express router here
const router = require('express').Router();
// require mongoose User model
let User = require('../models/user.model');

// handles http get requests to '/' root path
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// handles incoming post requests to '/add' path
router.route('/add').post((req, res) => {
  // store request username
  const username = req.body.username;
  // create new instace of User using username
  const newUser = new User({username});
  // save to database
  newUser.save()
    .then(() => res.json('User added!')) // respond with 'User added!'
    .catch(err => res.status(400).json('Error: ' + err)); // or respond with error message
});

module.exports = router;
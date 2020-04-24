const router = require('express').Router();
const bcrypt = require('bcryptjs');
const gt = require('./generateToken.js');
const Users = require('./auth-model.js');



router.post('/register', (req, res) => {
  let user = req.body;
  const rounds = process.env.HASH_ROUNDS || 6;
  const hash = bcrypt.hashSync(user.password, rounds);

  user.password = hash;

  Users.add(user)
    .then(saved => {
      const token = gt.generateToken(user)
      res.status(201).json({saved, token, message: "User Created"})
    })
    .catch(error => {
      res.status(500).json(error);
    })
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;

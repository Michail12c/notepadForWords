const { check, body } = require('express-validator');
const handleErrors = require('../../middlewares/handleErrors');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (router) => {

  router.post('/register', [
    body('email').isEmail(),
    body('password').isLength({min: 6, max: 40})
  ], handleErrors, async (req, res) => {
    try {

      const {email, password } = req.body;
      const user = await User.findOne({email});

      if(user) {
        return res.status(400).json({message: 'User already exist'});
      }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await new User({email, password: hashedPassword}).save();

    const token = jwt.sign(
      {userId: newUser._id},
      process.env.JWT_SECRET,
      {expiresIn: '1h'}
    );

    res.status(201).json({userId: newUser._id, token,  message: 'User is created'});

    } catch (error) {
     res.status(500).json(error)
    }
  })
};

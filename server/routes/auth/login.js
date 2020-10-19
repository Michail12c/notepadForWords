const { check, body } = require('express-validator');
const handleErrors = require('../../middlewares/handleErrors');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (router) => {
  router.post('/login', [
    body('email').isEmail(),
    body('password').exists()
  ], handleErrors, async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({email});

      if(!user) {
        return res.status(400).json({message: 'User is not exist'});
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({message: "Not correct"});
      }

      const token = jwt.sign(
        {userId: user._id},
        process.env.JWT_SECRET,
        {expiresIn: '1h'}
      );

      res.status(200).json({userId: user._id, token});

    } catch (error) {
      res.status(500).json(error);
    }
  });
};
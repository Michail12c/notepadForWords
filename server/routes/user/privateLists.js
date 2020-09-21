const { check, body } = require('express-validator');
const handleErrors = require('../../middlewares/handleErrors');
const isAuthenticated = require('../../middlewares/isAuthenticated');
const User = require('../../models/User');

module.exports = (router) => {
  router.post('/list',
  handleErrors,
  isAuthenticated,
  async (req, res) => {
    try {
      const user = await User.findById(req.user.userId);
      console.log(user.lists)
    } catch(error) {
      res.status(500).json(error);
    }
  });
};
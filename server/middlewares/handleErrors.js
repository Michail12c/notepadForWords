const { validationResult } = require('express-validator');

const handleErrors = (req, res, next) => {
  const errors = validationResult(req);
  if(errors.array().length) {
    return res.status(400).json({
      errors: errors.array(),
      message: 'Something is wrong'
    })
  }
  next();
}

module.exports = handleErrors;
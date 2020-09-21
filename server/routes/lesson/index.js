const { Router } = require('express');
const router = Router();

require('./lesson')(router);

module.exports = router;
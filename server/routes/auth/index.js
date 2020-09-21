const { Router } = require('express');
const router = Router();

require('./register')(router);
require('./login')(router);

module.exports = router;
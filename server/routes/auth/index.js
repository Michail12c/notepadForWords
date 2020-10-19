const { Router } = require('express');
const router = Router();

require('./register')(router);
require('./login')(router);
require('./google')(router);

module.exports = router;
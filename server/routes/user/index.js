const { Router } = require('express');
const router = Router();

require('./privateLists')(router);

module.exports = router;
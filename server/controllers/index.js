const express = require('express');
const router = express.Router();

router.use('/products', require('./products'));
router.use('/quotations', require('./quotations'));
module.exports = router;
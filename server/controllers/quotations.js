const express = require('express');
const router = express.Router();
const Quotation = require('../models/Quotation');

router.post('/', function(req, res) {
    Quotation.create(req.body, (result) => res.json({success: result}))
})
router.get('/', function(req, res) {
    Quotation.all((result) => res.json(result));
})

module.exports = router
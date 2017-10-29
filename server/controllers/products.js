const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.post('/', function(req, res) {
    Product.create(req.body.description, req.body.price, (result) => res.json({success: result}))
})
router.put('/', function(req, res) {
    Product.update({_id: req.body._id}, req.body, (result) => res.json({success: result}))
})
router.delete('/:id', function(req, res) {
    Product.delete(req.params.id, (result) => res.json({success: result}))
})
router.get('/', function(req, res) {
    Product.all((result) => res.json(result));
})

module.exports = router
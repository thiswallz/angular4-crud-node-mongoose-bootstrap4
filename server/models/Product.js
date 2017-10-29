const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    description : String,
    price : Number
});
const Product = mongoose.model('Product', productSchema);

exports.create = function(description, price, cb) {
    Product({description, price}).save(function(err){
        if(err) throw err;
        cb(true)
    });
}
exports.update = function(query, product, cb) {
    Product.findOneAndUpdate(query,{ $set: product}, { new: true }, function(err){
        if(err) throw err;
        cb(true)
    });
}
exports.delete = function(id, cb) {
    console.log("id,", id)
    Product.remove({_id: id}, function(err){
        if(err) throw err;
        cb(true)
    });
}
exports.all = function(cb) {
    Product.find({}, function (err, docs) {
        cb(docs)
    });
}

module.exports.Product = Product
module.exports.ProductSchema = productSchema


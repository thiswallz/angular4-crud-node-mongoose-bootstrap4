const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const QuotationSchema = new Schema({
    seq: { type: Number, default: 0 },
    subtotal : Number,
    taxes : Number,
    items : [{type: Schema.Types.ObjectId, ref: 'Product'}],
    customer: {
        name: String,
        address: String,
        city: String,
        phone: String
    },
    date: {
		type: Date,
		default: Date.now
	},
    validUntil: {
		type: Date,
		default: new Date(+new Date() + 7*24*60*60*1000)
	}
});
QuotationSchema.plugin(AutoIncrement, {inc_field: 'seq'});
const Quotation = mongoose.model('Quotation', QuotationSchema);

exports.create = function(quote, cb) {
    Quotation(quote).save(function(err){
        if(err) throw err;
        cb(true)
    });
}

exports.all = function(cb) {
    Quotation.find({})
    .populate('items')
    .exec(function (err, docs) {
        if(err) throw err;
        cb(docs)
    });
}

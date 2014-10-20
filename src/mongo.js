var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/addressbook');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Address = new Schema({
    street: String,
    city: String,
    region: String,
    country: String,
    zip: String
});

var Organization = new Schema({
    title: String,
    phones: Schema.Types.Mixed,
    addresses: [Address]
});

exports.Organization = mongoose.model('Organization', Organization);
exports.Address = mongoose.model('Address', Address);

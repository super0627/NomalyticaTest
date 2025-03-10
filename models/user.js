var mongoose = require('mongoose');
var util = require('../config/util.js');

var UserSchema = mongoose.Schema({
    name: {type:String},
    email: {type:String},
    password: {type:String},
    walletAddress: { type: String, unique: true, required: true },
    lastConnection: { type: Date, default: Date.now }
});

UserSchema.methods = {

    authenticate: function (plainText) {
        return util.encrypt(plainText) == this.password;
    }

};

mongoose.model('User', UserSchema);
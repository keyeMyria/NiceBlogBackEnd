var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    pwd: String,
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
})

UserSchema.pre('save', function(next) {
    if (this.isNew) {
        this.createAt = this.updateAt = Date.now();
    } else {
        this.updateAt = Date.now();
    }
    next();
})

UserSchema.statics = {
    fetch: function(cb) {
        return this
            .find()
            .sort('updateAt')
            .exec(cb)
    },
    findById: function(id, cb) {
        return this
            .findOne({ _id: id })
            .exec(cb)
    }
}

module.exports = UserSchema

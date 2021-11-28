let mongoose = require('mongoose');

let Users = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    middle_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    toJSON: {
        transform(doc, ret) {
            delete ret.password;
        },
    },
    versionKey: false
});

module.exports = mongoose.model('Users', Users);
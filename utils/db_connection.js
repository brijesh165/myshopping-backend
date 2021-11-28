const mongoose = require('mongoose');

class Database {
    constructor() {
        this._connect()
    }

    _connect() {
        mongoose.connect(process.env.MONGO_CONNECTION)
        .then(() => {
            console.log("Database connection status: Active")
        })
        .catch((error) => {
            console.error("Database connection status: Failed", error)
        })
    }
}

module.exports = new Database();
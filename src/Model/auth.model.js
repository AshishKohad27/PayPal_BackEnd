const { Schema, model } = require("mongoose");

const authSchema = new Schema({

    email: {
        type: String, unique: true, require: true
    },
    name: {
        type: String, require: true
    },
    password: {
        type: String, require: true
    }
})

const authModel = model("auth", authSchema);

module.exports = authModel;
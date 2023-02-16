const { Schema } = require("mongoose");

const UserSchema = new Schema({
    name: String,
    surname: String,
    login: String,
    password: String,
    playlists: {
        type: [{ id: String, title: String }],
        default: [],
    },
});

module.exports = { UserSchema };

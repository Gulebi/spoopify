const { Schema } = require("mongoose");

const UserSchema = new Schema({
    name: String,
    surname: String,
    login: String,
    password: String,
    playlistsIds: {
        type: [String],
        default: [],
    },
});

module.exports = { UserSchema };

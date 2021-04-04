const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
  servers: [
    {
      serverId: {
        type: Schema.Types.ObjectId,
        ref: "Server",
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);

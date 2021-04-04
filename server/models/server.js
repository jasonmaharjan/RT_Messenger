const mongoose = require("mongoose");

const Schema = mongoose.Schema();

const ServerSchema = new Schema({
  serverName: {
    type: String,
    required: true,
  },
  serverImage: {
    type: String,
  },
  users: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    },
  ],
  adminId: {
    type: String,
    required: true,
  },
  timestamps: true,
});

module.exports = mongoose.model("Server", ServerSchema);

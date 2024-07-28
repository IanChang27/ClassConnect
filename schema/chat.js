const { Schema, model } = require("mongoose")

const chatSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {type: String, default: "Anonymous"},
    message: {type: String}
})


module.exports = model("cahat", chatSchema, "cagattt")
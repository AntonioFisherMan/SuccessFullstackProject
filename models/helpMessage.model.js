const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const helpMessageSchema = new Schema(
  {
    userId:{
      type:Schema.ObjectId
    },  
    helpMessage:{
      type:String
    }
  }
);

const helpMessage = mongoose.model("helpMessage", helpMessageSchema);
module.exports = helpMessage;

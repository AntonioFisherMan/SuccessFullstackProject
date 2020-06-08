const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscribersSchema = new Schema(
  { 
    email:{
        type:String
    }
  }
);

const Subscribers = mongoose.model("Subscribers", subscribersSchema);
module.exports = Subscribers;

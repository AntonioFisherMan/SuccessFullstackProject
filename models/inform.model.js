const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const informSchema = new Schema(
  {
    userId:{
      type:Schema.ObjectId
    },  
    inform:{
      type:Object
    },
    isAddInform:{
      type:Boolean
    }
  }
);

const Inform = mongoose.model("Inform", informSchema);
module.exports = Inform;

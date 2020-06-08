const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema(
  { 
    userId:{
        type:Schema.ObjectId
    },
    inform: {
      type: Object,
    },
    items: {
      type: Array,
    }
  }
);

const Orders = mongoose.model("Orders", ordersSchema);
module.exports = Orders;

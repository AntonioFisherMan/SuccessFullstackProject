const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const unloginOrdersSchema = new Schema(
  { 
    inform: {
      type: Object,
    },
    items: {
      type: Array,
    }
  }
);

const UnloginOrders = mongoose.model("UnloginOrders", unloginOrdersSchema);
module.exports = UnloginOrders;

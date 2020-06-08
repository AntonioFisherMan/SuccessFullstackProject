const router = require("express").Router();

let Orders = require("../models/orders.model");
let UnloginOrders = require("../models/unloginorders.model");


  router.get("/:id", async (req, res) => {
    try {
      const orders = await Orders.find({userId:req.params.id});
      
      res.status(200).json({
        orders,
        message: 'Orders successfuly get'
      })
     
    } catch (error) {
      console.error(error);
      if (error.name === "CastError")
        res.status(404).send("Orders with Given ID not found.");
      else res.status(500).send("Error getting Orders.");
    }
  });

  
  router.post("/", function (req, res) {
    const newOrders = new Orders({
      userId: req.body.userId,
      items:req.body.items,
      inform:req.body.inform
    });
    newOrders
    .save()
    .then(item=>{
      res.status(200).json({
        item,
        message: 'Orders successfuly added'
      })
    })
    .catch((err) => res.status(404).json("Order not added"));

  });
  router.post("/unlogin", function (req, res) {
    const newUnloginOrders = new UnloginOrders({
      items:req.body.data.items,
      inform:req.body.data.formData
    });
    newUnloginOrders
    .save()
    .then(item=>{
      res.status(200).json({
        item,
        message: 'Orders successfuly added'
      })
    })
    .catch((err) => res.status(404).json("Order not added"));

  });
  module.exports = router;

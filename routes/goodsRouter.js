const router = require("express").Router();
const multer= require("multer")
const path = require("path");

var helpers = require('../server');
let Goods = require("../models/goods.model");
let Reviews = require("../models/reviews.model");


const pagination=(pageSize,page,resultGoods,res)=>{
  const totalCount=Object.keys(resultGoods).length
  const startIndex=(page-1)*pageSize;
  const endIndex=page*pageSize
  const goods=resultGoods.slice(startIndex,endIndex)
  var payload=Object.assign({totalCount},{goods})
  res.status(200).json(payload)
}


router.post("/", function (req, res) {
  let data=req.body.data;
  const pageSize=req.query.pageSize;
  const page=req.query.page;
  if(data&&data.length>0){
    Goods.aggregate(
      [ { $match : { $or: [ { style: {$in:data} }, { color: { $in: data } },{ sizes: { $in: data } } ] }} ]
  )
      .then((goods) => {
        pagination(pageSize,page,goods,res)
      })
      .catch(err =>
        res.status(404).json("not goods"));
  }else{
    Goods.find() 
    .then(resultGoods=>{
     pagination(pageSize,page,resultGoods,res)
    })
  }
  
});


router.get("/reviews", function (req, res) {
  Reviews.find()
    .then((reviews) => res.status(200).json(reviews))
    .catch((err) => res.status(404).json("Reviews is not found"));
});

router.get("/:id", async (req, res) => {
  try {
    const good = await Goods.findById(req.params.id);
    const reviewLength = await Reviews.find({ goodsId: req.params.id });
    const review = await Reviews.find({ goodsId: req.params.id }).limit(2);
    var reviewQuantity=reviewLength.length
    var data={good,review}
    var payload={}
    var goods = Object.assign({data},payload);
    res.status(200).json({goods,reviewQuantity})
  } catch (error) {
    if (error.name === "CastError")
      res.status(404).send("Goods with Given ID not found.");
    else res.status(500).send(error);
  }
});





router.post("/reviews/:goodsId", (req, res) => {
  helpers.uploadArray(req, res, (err) => {
    var finalImage=[]
    str2='/app/client/build';

    Object.keys(req.files).forEach(key => {
      finalImage.push(req.files[key].path.replace(str2, ''))
     
  })
    if (err) {
      return res.status(200).json({ success: false, message: err.message});
    }else if (!res.req.files) {
      res.status(404).json({
        success: false,
        message: "No files is selected",
      });
    }else {
      const newReviews = new Reviews({
        name: req.body.name,
        photo: req.body.photo,
        images: finalImage,
        rating: req.body.rating,
        reviewText:req.body.reviewText,
        goodsId:req.params.goodsId
      });
      newReviews
        .save()
        .then(review=>{
          res.status(200).json({
            review,
            success: true,
            message: "Your review successfuly upload",
          });
        })
    }
  });
});



module.exports = router;

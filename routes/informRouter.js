const router = require("express").Router();
let Inform =require("../models/inform.model")
var helpers = require('../server');

  

router.get("/:id", (req, res) => {
  Inform.findOne({userId:req.params.id})
    .then((inform) =>  res.status(200).json({
      inform,
      isAddInform:inform.isAddInform
    }))
    .catch((err) => {if (err.name === "CastError")
    res.status(404).json("Inform with Given ID not found.");
  else res.status(500).json("Error getting Inform Of User.");})
});

router.put("/:id", function (req, res) {
    try {
      helpers.uploadFile(req, res, (err) => {
        str2='/app/client/build';
        var userImg;
        if(req.file){
          userImg=req.file.path.replace(str2,'');
        }else{
          userImg=null
        }
       if (!req.file) 
      res.status(404).json({
        success: false,
        message: "No files is selected",
      })
     
        let informData = {     
          name: req.body.name, 
          surname: req.body.surname,
          city:req.body.city,
          code :req.body.code,
          country:req.body.country,   
          phone:req.body.phone,
          post:req.body.post,
          userImage:userImg
        };
        const inform=Inform.findOneAndUpdate({userId:req.params.id},{inform:informData}).then(item=>{
          if(item){
            res.status(200).json({
              inform,
              message: 'Your inform successfuly changes'
            })
          }else{
            res.status(404).json({
             message:"Your id is not valid"
            })
          }
        }).catch((err) => res.status(404).json({message:"Error upload inform"}))
      })
      } catch (error) {
        if (error.name === "CastError")
          res.status(404).json({message:"Error upload inform"});
        else res.status(500).json({message:"Error upload inform"});
      }
});


 router.post("/:id", (req, res) => {
  helpers.uploadFile(req, res, (err) => {
    str2='/app/client/build';
    var userImg;
    if(req.file){
      userImg=req.file.path.replace(str2,'');
    }else{
      userImg=null
    }
    let informData = {     
      name: req.body.name, 
      surname: req.body.surname,
      city:req.body.city,
      code :req.body.code,
      country:req.body.country,   
      phone:req.body.phone,
      post:req.body.post,
      userImage:userImg
    };
   
    if(err){
      res.status(404).json({ success: false, message: err.message})
    }
    else if (!req.file) 
      res.status(404).json({
        success: false,
        message: "No files is selected",
    })
    else{
      const newInform = new Inform({
        userId:req.params.id,
        inform:informData,
        isAddInform:req.body.isAddInform
      });
      newInform
      .save()
      .then((inform) =>  res.status(200).json({
        inform,
        message: 'Your inform successfuly saved'
      }))
    }
});
})
module.exports = router;
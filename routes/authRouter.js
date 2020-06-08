const router = require("express").Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth=require("../middleware/auth")

let User = require("../models/user.model");
let Inform =require("../models/inform.model")
let Subscribers =require("../models/subscribers.model")


router.post("/", (req, res) => {
  const {email, password } = req.body;
  //Simple validation
  if ( !email || !password)
    return res.status(400).json({ message: "Please enter all fields" });
  //Check for existing User
  
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ message: `User does not exist` });
   
    Inform.findOne({ userId:user.id }).then((inform) => {
      //Validate password 
    bcrypt.compare(password,user.password)
    .then(isMatch=>{
        if(!isMatch)return res.status(400).json({message:`Invalid password`});
        jwt.sign(
         { id: user.id },
         config.get("jwtSecret"),
         { expiresIn: 3600 },
         (err, token) => {
           if (err) throw err;
           res.json({
             token,
             user: {
               id: user.id,
               name: user.name,
               email: user.email,
             },
             inform
           });
         }
       );
     });
   });
    })
 
})

//route Get auth/user
//desk Get user data
//access Private
router.get('/user:id',auth,(req,res)=>{
    User.findById(req.user.id)
    .select('-password')
    .then(user=>res.json(user))
})

router.post('/subscribe',(req,res)=>{
  
  Subscribers.findOne({email:req.body.email }).then((subscriber) => {
    if (subscriber) return res.status(400).json({ message: `You have already first discount` })
    else{
      const Subscriber = new Subscribers({
        email:req.body.email
      });
      Subscriber
      .save()
      .then(review=>{
        res.status(200).send({
          success: true,
          message: "Your email successfuly send",
        });
      })
      .catch(console.log("err"));
    }
   
  })
 
})


module.exports = router;

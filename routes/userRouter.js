const router = require("express").Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

let User = require("../models/user.model");
let HelpMessage = require("../models/helpMessage.model");


let userHandlers = require('./controllers/userController');

router.post('/forgot_password',userHandlers.forgot_password)
router.post('/reset_password',userHandlers.reset_password)
router.post('/change_password',userHandlers.change_password)


router.get("/", function (req, res) {
  User.find()
    .then((users) => res.json(users))
    .catch(console.log("err"));
});

router.post("/help", function (req, res) {
  const newHelpMessage = new HelpMessage({
    userId: req.body.userId,
    helpMessage:req.body.helpMessage
  });
  newHelpMessage
  .save()
  .then(item=>{
    res.status(200).send({
      item,
      message: 'Message successfuly added'
    })
  })
  .catch((err) => res.status(404).json("not message review"));
});

router.post("/", (req, res) => {
  const { name, email, password } = req.body;
  //Simple validation
  if (!name || !email || !password)
    return res.status(400).json({ message: "Please enter all fields" });
  User.findOne({ name }).then((user) => {
    if (user) return res.status(400).json({message: `Name already exist` });
  });
  //Check for existing User
  User.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({message: `Email already exist` });
  });
  const newUser = new User({
    name,
    email,
    password,
  });
  
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;

      newUser.save().then((user) => {
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
            
            });
          }
        );
      });
    });
  });
});

router.delete("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("config");
const path = require("path");
const multer= require("multer")
var cookieParser = require("cookie-parser");
require("dotenv").config();

const app = new express();
//BODY-PARSER Middleware
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const db = config.get("mongoURI");

mongoose
  .connect(process.env.MONGODB_URI || db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });




const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on ${port}`));


const userRouter = require("./routes/userRouter");
app.use("/users", userRouter);
const goodsRouter = require("./routes/goodsRouter");
app.use("/goods", goodsRouter);
const authRouter = require("./routes/authRouter");
app.use("/auth", authRouter);

const ordersRouter = require("./routes/ordersRouter");
app.use("/orders", ordersRouter);

const informRouter = require("./routes/informRouter");
app.use("/inform", informRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null,  path.join(__dirname, 'client','build','images'))
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
      }
    })
    app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client','build','index.html'), function(err) {
        if (err) {
          res.status(500).send(err)
        }
      })
    })
  }else {
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, 'uploads'))
      },
      filename: function (req, file, cb) {
        cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname)
      },
     fileFilter:function(req, file, cb) {
        if(file.mimetype === "image/png" || 
        file.mimetype === "image/jpg"|| 
        file.mimetype === "image/jpeg"){
            cb(null, true);
        }
        else{
            cb(null, false);
        }
     }
    })
  }
  
  exports.uploadArray = multer({ storage: storage }).array("file",3);
  exports.uploadFile = multer({ storage: storage }).single("file");
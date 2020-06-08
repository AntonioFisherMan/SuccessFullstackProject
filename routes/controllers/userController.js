
var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  crypto = require('crypto'),
   sha256 = require('js-sha256');
  nodemailer = require('nodemailer');
  bcrypt=require('bcryptjs')
  async = require('async')

  var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'tooxa9@gmail.com',
        pass: 'zxcv123580'
    }
  });
 

exports.forgot_password = function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({
        email: req.body.forgotEmail
      }).exec(function(err, user) {
        if (user) {
          done(err, user);
        } else {
          done('User not found.');
        }
      });
    },
    function(user, done) {
      // create the random token
      crypto.randomBytes(20, function(err, buffer) {
        var token = buffer.toString('hex');
        done(err, user, token);
      });
    },
    function(user, token, done) {
      User.findByIdAndUpdate({ _id: user._id }, { reset_password_token: token, reset_password_expires: Date.now() + 86400000 }, { upsert: true, new: true }).exec(function(err, new_user) {
        done(err, token, new_user);
      });
    },
    function(token, user, done) {
      var mailOptions = {
        from: 'tooxa9@gmail.com', // sender address
        to: user.email, // list of receivers
        subject: 'Password help has arrived!',
        text:'Change pass https://full-stack-shop.herokuapp.com/forgotchangepass/' + token,
    };
     
      transporter.sendMail(mailOptions, function(error, info){
        if(error){
          return done(error);
          
        }
        console.log('Message sent: ' + info.response);
        return res.json({ message: 'Kindly check your email for further instructions' });
    });
    }
  ], function(err) {
    return res.status(422).json({ message: err });
  });
};

/**
 * Reset password
 */
exports.reset_password = function(req, res, next) {
  User.findOne({
    reset_password_token: req.body.token,
    reset_password_expires: {
      $gt: Date.now()
    }
  }).exec(function(err, user) {
    if (!err && user){
      if (req.body.newPassword === req.body.verifyPassword){
        user.password = bcrypt.hashSync(req.body.newPassword, 10);
        user.reset_password_token = undefined;
        user.reset_password_expires = undefined;
        user.save(function(err) {
          if (err) {
            return res.status(422).send({
              message: err
            });
          } else {
            
           
            var data = {
              to: user.email,
              from: "tooxa9@gmail.com",
              subject: 'Password Reset Confirmation',
              text:'Your password succesfuly changed'
            };

            transporter.sendMail(data, function(err) {
              if (!err) {
                return res.json({ message: 'Password reset' });
              } else {
                return done(err);
              }
            });
          }
        });
      } else {
        return res.status(422).send({
          message: 'Passwords do not match'
        });
      }
      return res.status(200).send({
        message: 'Password successfuly changed'
      })
    } else {
      return res.status(400).send({
        message: 'Password reset token is invalid or has expired.'
      });
    }
  });
};


//CHANGEUSERPASS

exports.change_password = function(req, res, next) {
  User.findOne({
    email:req.body.email
  }).then((user)=>{
    if (user) {
      bcrypt.compare(req.body.oldPass,user.password)
      .then(isMatch=>{
        if(!isMatch)return res.status(400).json({message:`Your old password is not valid`});
        if (req.body.newPassword === req.body.verifyPassword) {
          console.log(user)
          user.password = bcrypt.hashSync(req.body.newPassword, 10);
          user.save(function(err) {
            if (err) {
              return res.status(422).send({
                message: err
              });
            }
          });
        } else {
          return res.status(422).send({
            message: 'Passwords do not match'
          });
        }
        return res.status(200).send({
          message: 'Password successfuly changed'
        })
      })
    
    } else {
      return res.status(400).send({
        message: 'Incorect query'
      });
    }
  }) 
    
};
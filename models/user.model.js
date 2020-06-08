const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')
const Schema=mongoose.Schema;

const userSchema=new Schema({
   name:{
     type:String,
     required:true,
     unique:true
   },
   email:{
     type:String,
     required:true,
     unique:true
   },
   password:{
     type:String,
     required:true,
     unique:true
   },
   rememberMe:{
   type:Boolean
   },
   helpMessage:{
     type:Object
   },
reset_password_token: {
  type: String
},
reset_password_expires: {
  type: Date
}
},{
  timestamps:true,
}); 


userSchema.methods.comparePassword = function(password) {
return bcrypt.compareSync(password, this.password);
};

const User=mongoose.model('User',userSchema)
module.exports=User;
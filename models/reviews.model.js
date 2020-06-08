const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const reviewsSchema=new Schema({
    name:{
      type:String,
    },
    photo:{
      type:String,
    },
    images:{
      type:Array
    },
    reviewText:{
      type:String
    },
    rating:{
      type:Number
    },
    goodsId:{
      type:Schema.ObjectId
    }
},{
  timestamps:true,
}); 

const Reviews=mongoose.model('Reviews',reviewsSchema)
module.exports=Reviews;
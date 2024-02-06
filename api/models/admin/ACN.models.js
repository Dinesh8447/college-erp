import mongoose from "mongoose";

const noticschema  = new mongoose.Schema({
    from:{
        type:String,
        default:'admin'
    },
    description:String,
   
},{timestamps:true})

const adminnotic = mongoose.model('adminnoticmodel',noticschema)

export default adminnotic
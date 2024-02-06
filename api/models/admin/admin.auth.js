import mongoose from "mongoose";

const adminauthschema  = new mongoose.Schema({
    username:String,
    password:String,
    role:{
        type:String,
        default:'admin'
    }
   
},{timestamps:true})

const adminauthmodel = mongoose.model('adminauthmodel',adminauthschema)

export default adminauthmodel
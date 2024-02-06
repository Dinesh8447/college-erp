import mongoose from "mongoose";

const schema  = new mongoose.Schema({
    name:String,
    phone:Number,
    email:String,
    department:String,
    gender:String,
    password:String,
    photourl:{
        type:String,
        default:'https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg='
    }, 
    role:{
        type:String,
        default:'teacher'
    },
},{timestamps:true})

const admincreateteacher = mongoose.model('adminteachermodel',schema)

export default admincreateteacher
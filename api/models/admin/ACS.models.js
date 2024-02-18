import mongoose from "mongoose";

const schema  = new mongoose.Schema({
    name:String,
    rollno:Number,
    phone:Number,
    dob:String,
    email:String,
    department:String,
    arrear:Number,
    gender:String,
    address:String,
    password:String,
    fees:String,
    role:{
        type:String,
        default:'student'
    },
    photourl:{
        type:String,
        default:'https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg='
    }, 
},{timestamps:true})

const admincreatestudent = mongoose.model('adminstudentmodel',schema)

export default admincreatestudent
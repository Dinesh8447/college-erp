import mongoose from "mongoose";

const userschma  = new mongoose.Schema({
    username:String,
    password:String,
    photourl:{
        type:String,
        default:'https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg='
    },
    isadmin:{
        type:Boolean,
        default:false
    },
    role:{
       type:String,
       default:'student'
    }
},{timestamps:true})

const user = mongoose.model('usermodel',userschma)

export default user
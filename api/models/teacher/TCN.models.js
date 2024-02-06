import mongoose from "mongoose";

const noticschema  = new mongoose.Schema({
    from:{
        type:String,
        default:'teacher'
    },
    description:String,
   
},{timestamps:true})

const teachernotice = mongoose.model('teachernoticmodel',noticschema)

export default teachernotice;
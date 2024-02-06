import mongoose from "mongoose";

// models/Timetable.js
const timetableSchema = new mongoose.Schema({
  day: String,
  startTime: String,
  endTime:String, 
  subject: String, 
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'teachernoticmodel' },
});



const Timetable = mongoose.model('Timetable', timetableSchema);

export default  Timetable;

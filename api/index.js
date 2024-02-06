import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import studentauth from './routes/student.route.js'
import teacherroute from './routes/teacher.route.js'
import adminroute from './routes/admin.route.js'
import bodyParser from 'body-parser'




const app = express()
dotenv.config();



app.use(bodyParser.json())


// routes
app.use('/api/admin', adminroute)
app.use('/api/student', studentauth)
app.use('/api/teacher', teacherroute)


// server error handler
app.use((err, req, res, next) => {
    const statuscode = err.statuscode || 500
    const message = err.message || 'internal server error'
    res.status(500).json({
        success: false,
        statuscode,
        message
    })
})


// mongodb connection
mongoose.connect("mongodb://localhost:27017/demo")
    .then(() => console.log('connected'))
    .catch((e) => console.log(e))

// server listing...
app.listen(4000, () => {
    console.log('running....4000 ')
})
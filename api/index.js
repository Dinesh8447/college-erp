import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authroute from '../api/routes/auth.route.js'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

const app = express()
dotenv.config();



app.use(cookieParser())
app.use(bodyParser.json())




// routes
app.use('/api/auth',authroute)





// server error handler
app.use((err,req,res,next)=>{
    const statuscode = err.statuscode || 500
    const message = err.message || 'internal server error'
    res.status(500).json({
        success:false,
        statuscode,
        message
    })
})

// mongodb connection
mongoose.connect(process.env.MONGODB)
.then(()=>console.log('connected'))
.catch((e)=>console.log(e))

// server listing...
app.listen(4000,()=>{
    console.log('running....4000 ')
})
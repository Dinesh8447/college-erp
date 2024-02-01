import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authroute from '../api/routes/auth.route.js'
import bodyParser from 'body-parser'

dotenv.config();

const app = express()

app.use(bodyParser.json())




app.use('/api/auth',authroute)




app.use((err,req,res,next)=>{
    const statuscode = err.statuscode || 500
    const message = err.message || 'internal server error'
    res.statuscode(500).json({
        success:false,
        statuscode,
        message
    })
})


mongoose.connect(process.env.MONGODB)
.then(()=>console.log('connected'))
.catch((e)=>console.log(e))


app.listen(4000,()=>{
    console.log('running....4000 ')
})
import express from "express";
import { signin, getnotice } from '../controllers/student.controllers.js'

const router = express.Router()


router.post('/signin', signin)
router.get('/getnotice', getnotice)


export default router
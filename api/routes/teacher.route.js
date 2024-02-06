import express from "express";
import { signin, createstudent, getnotice, createnotice, createtimetable ,getstudentdata} from '../controllers/teacher.controller.js'

const router = express.Router()


router.post('/signin', signin)
router.post('/createstudent', createstudent)
router.get('/getnotice', getnotice)
router.post('/createnotic', createnotice)
router.post('/createtimetable', createtimetable)
router.get('/getallstudentdata?',getstudentdata)

export default router
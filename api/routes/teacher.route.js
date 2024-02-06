import express from "express";
import { signin, createstudent, getnotice, createnotice, createtimetable } from '../controllers/teacher.controller.js'

const router = express.Router()


router.post('/signin', signin)
router.post('/createstudent', createstudent)
router.get('/getnotice', getnotice)
router.post('/createnotic', createnotice)
router.post('/createtimetable', createtimetable)

export default router
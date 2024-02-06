import express from "express";
import { createstudent, createteacher, createnotice,adminregister,adminsignin } from '../controllers/admin.controllers.js'

const router = express.Router()


router.post('/auth/adminregister', adminregister)
router.post('/auth/adminsignin', adminsignin)

router.post('/createstudent', createstudent)
router.post('/createteacher', createteacher)
router.post('/createnotice', createnotice)



export default router
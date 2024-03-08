import express from "express";
import { createstudent, createteacher, createnotice,adminregister,adminsignin 
    ,updatestudent,
    updateteacher,
    deletestudent,
    deleteteacher,
    getallstudent,
    getallteacher,
    getalladmin,    
} from '../controllers/admin.controllers.js'

const router = express.Router()


router.post('/auth/adminregister', adminregister)
router.post('/auth/adminsignin', adminsignin)
router.post('/createstudent', createstudent)
router.post('/createteacher', createteacher)
router.post('/createnotice', createnotice)


router.get('/getallstudent',getallstudent)
router.get('/getallteacher',getallteacher)
router.get('/getalladmin',getalladmin)

router.put('/updatestudent/:studentid',updatestudent)
router.put('/updateteacher/:teacherid',updateteacher)
router.delete('/deletestudent/:studentid',deletestudent)
router.delete('/deleteteacher/:teacherid',deleteteacher)


export default router
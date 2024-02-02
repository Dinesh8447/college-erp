import express  from "express";
import {createuser,signin,signout} from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/createuser',createuser)
router.post('/signin',signin)
router.post('/signout',signout)


export default router
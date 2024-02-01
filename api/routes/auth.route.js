import express  from "express";
import {createuser,signin} from '../controllers/auth.controller.js'

const router = express.Router()

router.post('/createuser',createuser)
router.post('/signin',signin)


export default router
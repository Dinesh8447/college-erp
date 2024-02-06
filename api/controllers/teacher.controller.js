import actmodel from '../models/admin/ACT.models.js'
import errorhandler from '../utils/error.js'
import studentdb from '../models/admin/ACS.models.js'
import noticdb from '../models/admin/ACN.models.js'
import teachernotice from '../models/teacher/TCN.models.js'
import Timetable from '../models/teacher/Timtable.model.js'

export const signin = async (req, res, next) => {

    const { email, password } = req.body

    const data = await actmodel.findOne({ email })

    try {
        if (!data) {
            return next(errorhandler(404, 'user not found'))
        }
        if (data.password !== password) {
            return next(errorhandler(404, 'password invalid'))
        }
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }

}


export const createstudent = async (req, res, next) => {
    try {
        const student = await studentdb.create(req.body)
        student.save()
        res.json(student)
    } catch (error) {
        next(error)
    }
}



export const getnotice = async (req, res, next) => {
    try {
        const notice = await noticdb.find()
        res.status(200).json(notice)
    } catch (error) {
        next(error)
    }
}


export const createnotice = async (req, res, next) => {
    try {
        const notic = await teachernotice.create(req.body)
        notic.save()
        res.json(notic)
    } catch (error) {
        next(error)
    }
}

export const createtimetable = async (req, res, next) => {
    try {
        const timetable = await Timetable.create(req.body);
        timetable.save();
        res.status(201).json(timetable);
    } catch (error) {
        next(error)
    }
}
import studentdb from '../models/admin/ACS.models.js'
import teacherdb from '../models/admin/ACT.models.js'
import adminnoticedb from '../models/admin/ACN.models.js'
import adminauthmodel from '../models/admin/admin.auth.js'
import errorhandler from '../utils/error.js'

export const adminregister = async(req,res,next) =>{

    const {username,password,photourl} = req.body
    try {
        const data = await adminauthmodel.create({username,password,photourl})
        await data.save()
        res.status(200).json(data)
    } catch (error) {
        next(error)   
    }
        
}


export const adminsignin = async (req, res, next) => {

    const { username, password } = req.body

    const data = await adminauthmodel.findOne({ username })

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


export const createteacher = async (req, res, next) => {
    try {
        const teacher = await teacherdb.create(req.body)
        teacher.save()
        res.json(teacher)
    } catch (error) {
        next(error)
    }
}

export const createnotice = async (req, res, next) => {
    try {
        const notic = await adminnoticedb.create(req.body)
        notic.save()
        res.json(notic)
    } catch (error) {
        next(error)
    }
}


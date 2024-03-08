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

export const updatestudent = async (req, res, next) => {
    const {studentid} = req.params

    try {
            const {name,
                rollno,
                phone,
                dob,
                email,
                department,
                arrear,
                gender,
                address,
                password,
                fees,
                role,
                photourl} = req.body
        const notic = await studentdb.findByIdAndUpdate(studentid,{name,
            rollno,
            phone,
            dob,
            email,
            department,
            arrear,
            gender,
            address,
            password,
            fees,
            role,
            photourl},{new:true})
        res.json(notic)
    } catch (error) {
        next(error)
    }
}



export const updateteacher = async (req, res, next) => {
    const {teacherid} = req.params

    try {
            const {name,
                phone,
                email,
                department,
                gender,
                photourl} = req.body
        const notic = await teacherdb.findByIdAndUpdate(teacherid,{name,
            phone,
            email,
            department,
            gender,
            photourl},{new:true})
        res.json(notic)
    } catch (error) {
        next(error)
    }
}

export const deletestudent = async(req,res,next) =>{
    const {studentid} = req.params
    try {
        await studentdb.findByIdAndDelete(studentid)
        res.json("deleted")
    } catch (error) {
        next(error)
    }
}

export const deleteteacher = async(req,res,next) =>{
    const {teacherid} = req.params
    try {
        await teacherdb.findByIdAndDelete(teacherid)
        res.json("deleted")
    } catch (error) {
        next(error)
    }
}





export const  getallstudent = async(req,res,next)=>{
try {
   const student =  await studentdb.find()
   res.status(200).json(student)
} catch (error) {
    next(error)
}
}

export const  getallteacher = async(req,res,next)=>{
    try {
        const teacher =  await teacherdb.find()
        res.status(200).json(teacher)
    } catch (error) {
    next(error)
    }
    }


    export const  getalladmin = async(req,res,next)=>{
        try {
            const admin =  await adminauthmodel.find()
            res.status(200).json(admin)
        } catch (error) {
        next(error)
        }
        }
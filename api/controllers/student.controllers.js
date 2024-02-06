import acsmodel from '../models/admin/ACS.models.js'
import errorhandler from '../utils/error.js'
import TCN from '../models/teacher/TCN.models.js'

export const signin = async (req, res, next) => {

    const { rollno, password } = req.body

    const data = await acsmodel.findOne({ rollno })

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


export const getnotice = async (req, res, next) => {
    try {
        const notice = await TCN.find()
        res.status(200).json(notice)
    } catch (error) {
        next(error)
    }
} 
import userdb from "../models/user.model.js"
import bcrypt from 'bcryptjs'

export const createuser = async (req, res, next) => {
    const { username, password, role } = req.body

    try {    
        const hash = bcrypt.hashSync(password, 10)
        const user = await userdb.create({
            username,
            password: hash,
            role
        })

        user.save()
        
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }


}



export const signin = (req, res, next) => {

}





import userdb from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import erroehandler from '../utils/error.js'

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



export const signin = async(req, res, next) => {

    const {username,password} = req.body

    try {
        
        
        if(!username || !password || username === ' ' || password === ' '){
            return next(erroehandler(400,'every fields are required'))
        } 

    const validuser = await userdb.findOne({username})

    if(!validuser){
      return  next(erroehandler(404,'user not found'))
    }

    const validpassword = bcrypt.compareSync(password,validuser.password)

    if(!validpassword){
        return  next(erroehandler(404,'password incorrect'))
      }

      const token = jwt.sign({id:validuser._id,isadmin:validuser.isadmin},process.env.JWT_SERCT_KEY)

      const {password:pass,...rest} = validuser._doc
      
      res.status(200).cookie('accesstoken',token,{httpOnly:true}).json(rest)
    } catch (error) {
        next(error)
    }

}





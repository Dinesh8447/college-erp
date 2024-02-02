import jwt from 'jsonwebtoken'


export const verfiytoken = (req, res, next) => {
    const token = req.cookies.accesstoken;
    if (!token) {
        return next(401, 'unauthorized')
    }
    //verifitoken
    jwt.verify(token, process.env.JWT_SERCT_KEY, (err, user) => {
        if (err) {
            return next(401, 'unauthorized')
        }
        req.user = user
        next()
    })



}
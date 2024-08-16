import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) => {
    console.log(1)
    const token =  req.cookies.accessToken
  
        console.log(token)
    if(!token){
        return res.send("no token")
    }

    const decodeToken = jwt.verify(token, process.env.ACCESS_TOKEN_KEY)

    

    req.user =decodeToken.id
    
    next()

}

export default verifyToken
    


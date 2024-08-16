import jwt from "jsonwebtoken"
  export   const makeAccessToken =async(exist)=>{

       const accessToken =     jwt.sign({id:exist._id},process.env.ACCESS_TOKEN_KEY,{expiresIn:"1d"})
        return accessToken

    }

    export   const makeRefreshToken =async(exist)=>{

      const   refreshToken =    jwt.sign({id:exist._id},process.env.REFRESH_TOKEN_KEY,{expiresIn:"10d"})
            return refreshToken

    }
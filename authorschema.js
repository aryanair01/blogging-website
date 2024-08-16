import mongoose from "mongoose";


 const authorschema =  mongoose.Schema({
        name:{
            type:String
        },
        email:{
            type:String
        },
        
        password:{
            type:String
        }
    },
)

  const authordata = mongoose.model("authorDB",authorschema)
  export default authordata
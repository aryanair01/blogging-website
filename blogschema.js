import mongoose from "mongoose";

const blogschema = mongoose.Schema({
    title:{
        type:String
    },
    des:{
        type:String
    },
    auth:{
        type:String
    },
    gen:{
        type:String
    },
    imgUrl:{
        type:String
    }
})

const blogdata = mongoose.model("BlogDB",blogschema)
export default blogdata
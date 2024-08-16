import mongoose from "mongoose";

export const db = mongoose.connect("mongodb://127.0.0.1:27017/blogging").then(()=>{
    console.log("database connected successfully")
}).catch((error)=>{
    console.log("database is not connected")
})
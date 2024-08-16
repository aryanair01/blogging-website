import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {db} from "../blog/database/db.js"
import myroute from "../blog/routes/blogroutes.js"
dotenv.config()

const app= express()
app.use(cors())
app.use(express.json());
app.use(myroute)



app.listen(process.env.PORT,(error)=>{
    console.log(`server run on PORT ${process.env.PORT}`)
})
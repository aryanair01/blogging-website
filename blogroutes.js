import express from "express";
import {addapi, deleteapi, singledata, updateapi} from "../functions/controller.js"
import { displayapi } from "../functions/controller.js";
import { logincontrol, registercontrol } from "../functions/controller.js";
import verifyToken from "../functions/middleware.js";

const route = express.Router()
route.post("/blog/add",addapi)
route.get("/blog/display",displayapi)
route.delete("/blog/delete/:id",deleteapi)
route.patch("/blog/update/:id",updateapi)
route.post("/blog/authlogin",logincontrol)
route.post("/blog/authregister",registercontrol)
route.get("/blog/getsingledata/:id",singledata)





export default route
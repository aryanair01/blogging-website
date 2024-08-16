
import blogdata from "../schemas/blogschema.js"
import authordata from "../schemas/authorschema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { makeAccessToken, makeRefreshToken } from "../helper/Generatetok.js"



export const addapi = async(req,res)=>{
    try{
        const { title, des, auth, gen ,imgUrl } = req.body ;
        const newblog = new blogdata({ title, des, auth, gen, imgUrl });
        const result = await newblog.save();

        if(result){
            res.send("data inserted!!!!")
        }
        else{
            res.status(404).send("data not inserted")
        }    
        


    }catch(error){
        res.status(500).send({message:"server error", success:false})
    }

}

export const displayapi = async(req,res)=>{
    try{
        const alldata = await blogdata.find()
        res.send(alldata)

    }catch(error){
       res.status(500).send({message:"server error", success:false})
    }
}

export const deleteapi = async(req,res)=>{
    try{
        const { id } = req.params
        const deletedata= await blogdata.findByIdAndDelete({ _id: id})

        if (!deletedata) {
            res.send("Blog not delete")
        }
        res.send( "Blog Deleted " )

    }catch(error){
        res.status(500).send("error found!! ")
    }
}

export const updateapi = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, des, auth, gen, imgUrl } = req.body;

        // Ensure that update data is provided
        if (!title && !des && !auth && !gen && !imgUrl) {
            return res.status(400).send({ message: "No update data provided", success: false });
        }

        const updatedata = await blogdata.findByIdAndUpdate(
            id,
            { title, des, auth, gen, imgUrl }, // Pass the update data
            { new: true, runValidators: true } // Return the updated document
        );

        if (!updatedata) {
            return res.status(404).send({ message: "Blog not found", success: false });
        }

        res.status(200).send({ message: "Blog updated", success: true, data: updatedata });
    } catch (error) {
        res.status(500).send({ message: "Server error", success: false });
    }
};


export const registercontrol = async(req,res)=>{

    try {
        
        const { name , email,password } = req.body

        const exist = await authordata.findOne({ email: email })
       
        if (exist) {
            return res.send({ message: "user already Exist", success: false })
        }
       
        const hashpassword = await bcrypt.hashSync(password, 10)
        

        const createUser = await new authordata({
            name: name,
            email: email,
            password: hashpassword,
        })
        
        await createUser.save()
        if (!createUser) {
            return res.send({ message: "user not registered", success: false })
        }

        res.send({ message: "user registered", success: true })


    } catch (error) {
        res.status(500).send({ message: "error occurred in server ", success: false })
    }

}

export const logincontrol = async(req,res)=>{

    try {

        const { email, password } = req.body

        const exist = await authordata.findOne({ email: email })
        
        if (!exist) {
            return res.send("user doesn't exists plz register ")
        }
        else {
         

            const hashpassword = exist.password
            const passCheck = await bcrypt.compare(password, hashpassword)

            if (passCheck) {

                const option ={
                    httpOnly:true,
                    secure:true
                }

              const  accesstoken =await makeAccessToken(exist)
               const refreshtoken =await makeRefreshToken(exist)

               exist.refreshToken=refreshtoken
               await exist.save()

                res.cookie("accessToken",accesstoken,option)
                res.cookie("refreshToken",refreshtoken,option)
               res.send({access:accesstoken,refresh:refreshtoken,message:"succesfully login",user:exist ,success:true})
                    
                
            }
            else {
                return res.send({success:false,message:"wrong password"})
            }

        }



    } catch (error) {
        res.send("error occured")
    }

}

export const logoutUser=async(req,res)=>{
    try {
        
        const option ={
            httpOnly:true,
            secure:true
        }
       const id =  req.user
          
      await  authordata.findByIdAndUpdate({_id:id},{refreshToken:null},{new:true})
      res.clearCookie("accessToken",option)
      res.clearCookie("refreshToken",option)
        res.send({message:"logout user successFully"})

        

    } catch (error) {
        
    }
}

export const singledata =async(req,res)=>{

       try {
            const { id } = req.params
    
            const singlUserData = await blogdata.findOne({ _id: id })
    
            res.send(singlUserData)
    
        } catch (error) {
            res.send("something wrong")
        }
    
    
    
    
}



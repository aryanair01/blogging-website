import React from 'react'
import axios from 'axios'
import {useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

export default function Update() {

    const navigate =  useNavigate()

    const [title, settitle] = useState("")
    const [des, setdes] = useState("")
    const [auth,setauth] = useState("")
    const [gen,setgen] = useState("")
    const [imgUrl, setimgUrl] = useState("")


  const { id } = useParams()
  
    const getSingleData = async (x) => {

        const response = await axios.get(`http://localhost:3070/blog/getsingledata/${x}`)

        settitle(title)
        setdes(response.data.des)
        setauth(response.data.auth)
        setgen(response.data.gen)
        setimgUrl(response.data.imgUrl)

    }

    useEffect(() => {
        getSingleData()
    }, [id])




  const handleupdate=async(x)=>{
 
    const response = await axios.patch(`http://localhost:3070/blog/update/${x}`, { title:title,des:des,auth:auth,gen:gen, imgUrl:imgUrl  })
  
    alert(response.data)
  
    if(response.data){
        navigate("/Authorpage")
    }
  }


  return (
    
    <Container style={{ borderStyle: "solid", margin: "20px" }}>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">title</label>
                    <input type="email" className="form-control" placeholder={title} onChange={(e)=>{settitle(e.target.value)}} id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" value={des} onChange={(e)=>{setdes(e.target.value)}} className="form-label">description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                </div>
                <div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">author name</span>
                        <input type="text" value={auth} onChange={(e)=>{setauth(e.target.value)}} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">genre</span>
                        <input type="text" value={gen} onChange={(e)=>{setgen(e.target.value)}} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">upload picture</label>
                    <input value={imgUrl} onChange={(e)=>{setimgUrl(e.target.value)}} className="form-control" type="file" id="formFile" />
                </div>

                </div>

                <div>
                    <button type="button" onClick={()=>{handleupdate(id)}} className="btn btn-secondary" style={{ marginBottom: "20px" }}>SAVE CHANGES</button>
                </div>


            </Container>
    
  )
}

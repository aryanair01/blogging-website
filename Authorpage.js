import React from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage"
import { app } from "./Firebase"


export default function Authorpage() {


    const [title, settitle] = useState("")
    const [des, setdes] = useState("")
    const [auth, setauth] = useState("")
    const [gen, setgen] = useState("")
    const [file, setfile] = useState("")

    const [data, setdata] = useState([])
    const navigate = useNavigate()

    const handleFile = (e) => {

        setfile(e.target.files[0])
        

    }


    const addblog = async (e) => {
        e.preventDefault()

        const storage = getStorage(app)
        const ref = storageRef(storage, `/blogimages/${Date.now()}`)
        await uploadBytes(ref, file)
        const imgUrl = await getDownloadURL(ref)
        console.log(imgUrl)


        const response = await axios.post("http://localhost:3070/blog/add", { title: title, des: des, auth: auth, gen: gen, imgUrl: imgUrl })

        alert(response.data)
        navigate("/Authorpage")
        settitle("")
        setauth("")
        setdes("")
        setgen(" ")
        setfile(" ")

    }
    const blogdisplay = async () => {
        const response = await axios.get("http://localhost:3070/blog/display")
        setdata(response.data)
    }

    const blogdelete = async (x) => {
        const response = await axios.delete(`http://localhost:3070/blog/delete/${x}`)
        alert(response.data.message)
        blogdisplay()
    }

    const blogedit = (x) => {
        navigate(`/Update/${x}`)
    }

    useEffect(() => {
        blogdisplay()
    })

    return (
        <div>
            <div className='row'>
                <div className='col'><h3 style={{ margin: "10px" }}>ADD A BLOG:</h3></div>
                <div className='col' ><button type="button" style={{ marginLeft: "500px", marginTop: "10px", padding: "10px" }} className="btn btn-secondary" >LOGOUT </button></div>
            </div>
            <Container style={{ borderStyle: "solid", margin: "20px" }}>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">title</label>
                    <input value={title} onChange={(e) => { settitle(e.target.value) }} className="form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">description</label>
                    <textarea value={des} onChange={(e) => { setdes(e.target.value) }} className="form-control" id="exampleFormControlTextarea1" rows={3}  />
                </div>
                <div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">auth name</span>
                        <input  value={auth} onChange={(e) => { setauth(e.target.value) }} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group-sm mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-sm">genre</span>
                        <input value={gen} onChange={(e) => { setgen(e.target.value) }} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                </div>


                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">upload picture</label>
                    <input onChange={handleFile} className="form-control" type="file" id="formFile" />
                </div>

                <div>
                    <button onClick={addblog} type="button" className="btn btn-secondary" style={{ marginBottom: "20px" }}>ADD </button>
                </div>


            </Container>

            <Container className='d-flex flex-wrap justify-content-around'>
                {
                    data.map((value, index) => {
                        return (<>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src={value.imgUrl} className="card-img-top" alt="..." />
                                <div className="card-body">

                                    <p style={{ color: "grey", margin: "10px" }}> {value.gen}</p>
                                    <h5 className="card-title"> {value.title}</h5>
                                    <p className="card-text">-BY {value.auth}</p>
                                    <p className="card-text">{value.des}</p>
                                    <button type="button" className="btn btn-danger" onClick={() => { blogdelete(value._id) }} style={{ marginBottom: "20px" }}>DELETE </button>
                                    <button type="button" className="btn btn-primary" onClick={() => { blogedit(value._id) }} style={{ marginBottom: "20px" }}>UPDATE </button>
                                </div>
                            </div>


                        </>)
                    })
                }

            </Container>


        </div>
    )
}

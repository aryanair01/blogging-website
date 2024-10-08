import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'


export default function Register() {
  const navigate =  useNavigate()
  const [name,setname]=useState("")
  const [email,setemail]=useState("")
  const [pass,setpass]=useState("")

  const reg = async(e)=>{
   
    try{

      const response = await axios.post("http://localhost:3070/blog/authregister",{name,email,password:pass})
      if(response.data.success===true){
        alert(response.data.message)
        navigate("/Dashboard")
      }
      else{
        alert(response.data.message)
      }

    }catch(error){
      alert(error.message)
    }

  }

  return (
    <div>
      <Container >
      <section className="vh-100 bg-image" style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")' }}>
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: 15 }}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                      <form>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input onChange={(e)=>{setname(e.target.value)}} type="text" id="form3Example1cg" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Example1cg">Your Name</label>
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input onChange={(e)=>{setemail(e.target.value)}} type="email" id="form3Example3cg" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input  onChange={(e)=>{setpass(e.target.value)}}  type="password" id="form3Example4cg" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Example4cg">Password</label>
                        </div>
     
                        <div className="d-flex justify-content-center">
                          <button onClick={()=>{reg()}} type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                        </div>
                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/Dashboard"><u>Login here</u></Link></p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

     </Container>



    </div>
  )
}

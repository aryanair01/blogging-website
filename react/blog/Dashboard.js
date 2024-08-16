import React from 'react'
import { app } from "./Firebase"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

export default function Dashboard() {

const navigate=useNavigate()
const [email,setemail]=useState("")
const [password,setpass]=useState("")

const logged= async ()=>{
  try{

    const {data:{message,mytoken,user,success}} = await  axios.post("http://localhost:3070/blog/authlogin",{email,password})
      
 
    if(success==true){
      
     localStorage.setItem("token",mytoken)
     navigate("/Authorpage")
 
    }else{
      
     localStorage.removeItem("token")
 
    }
 
     }catch(error){
       alert(error.message)
     }
 }

  return (


    <div>

      <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }} />
                          <span className="h1 fw-bold mb-0">BLOG</span>
                        </div>
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: 1 }}>Sign into your account</h5>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="email" onChange={(e)=>{setemail(e.target.value)}}  id="form2Example17" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form2Example17">Email address</label>
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="password" onChange={(e)=>{setpass(e.target.value)}}  id="form2Example27" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form2Example27">Password</label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block" type="button" onClick={()=>{logged()}}>Login</button>
                        </div>



                      
                        <a className="small text-muted" href="#!">Forgot password?</a>
                        <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <Link to="/Register" style={{ color: '#393f81' }}>Register here</Link></p>
                        <a href="#!" className="small text-muted">Terms of use.</a>
                        <a href="#!" className="small text-muted">Privacy policy</a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

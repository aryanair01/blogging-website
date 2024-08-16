import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">

        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item px-5">
                <Link className="nav-link active" aria-current="page" to="/Dashboard" style={{ fontFamily: "sans-serif", fontSize: "20px", fontWeight: "bold" }} > <img src={"https://img.freepik.com/premium-vector/triangle-rests-top-open-book-against-plain-background-minimalist-depiction-flamingo39s-elegant-neck-head_585735-32400.jpg?size=626&ext=jpg&ga=GA1.1.63870372.1720308718&semt=ais_user "} style={{height:"50px",width:"50px"}}/>BOOKZZZ</Link>
              </li>
              <li className="nav-item " style={{fontSize:"20px",marginTop:"5px"}}>
                <Link className="nav-link active " aria-current="page" to="/Home"  >HOME</Link>
              </li>
              <li className="nav-item px-5" style={{fontSize:"20px",marginTop:"5px"}}>
                <Link className="nav-link active" aria-current="page" to="/Show" >BLOGS</Link>
              </li>
              <li className="nav-item px-5" style={{fontSize:"20px",marginTop:"5px"}}>
                <Link className="nav-link active" aria-current="page" to="/About" >ABOUT US</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>


    </div>
  )
}

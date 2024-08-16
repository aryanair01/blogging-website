import Dashboard from '../blog/Dashboard'

import React from 'react'
import { Route,Routes,BrowserRouter } from 'react-router-dom'

import Nav from '../blog/Nav'
import Home from '../blog/Home'
import Register from '../blog/Register'
import Show from './Show'
import Authorpage from './Authorpage'
import Update from './Update'
import About from './About'


export default function Blog() {
  return (
    <div>
        <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Dashboard' element={<Dashboard/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/Show' element={<Show/>} />
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Authorpage' element={<Authorpage/>}/>
          <Route path='/Update/:id' element={<Update/>} />
          <Route path='/About' element={<About/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

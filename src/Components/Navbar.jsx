import React from 'react'
import logo from '../img/logo.svg'

import 'bootstrap/dist/css/bootstrap.min.css';


function nav(){
    return <>
        <nav className="navbar bg-light nav-txt">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" width="30" height="30" className="d-inline-block align-text-top"/> 
            <p className="d-inline m-2">The Brand affiliate</p>
          </a>
         <div className="container-right d-flex">
          <a href="/"  className='nav-link me-3 ms-4'>Dashboard</a>
          <a href="/profile" className='nav-link me-3 ms-4' >Profile</a>
          <a href="/contact"  className='nav-link me-3 ms-4'>About us</a>
          </div>   
          
        </div>
      </nav>
    </>


}

export default nav
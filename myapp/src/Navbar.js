import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
import image from './assets/logo.png'
import cart from './assets/cart.png'
import user from './assets/user.png'
import userr from './assets/userr.png'
import cartt from './assets/cartt.png'


const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary body ">
  <div className="container-fluid nav">
      <h2 className='tagline'>"Where every bite is sweet and every sip is soothing."</h2>
    <button
      className="navbar-toggler togglebutton"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon " />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      {/* <h2 className='tagline'>Where every bite is sweet and every sip is soothing.</h2> */}
      <ul className="navbar-nav head">
        {/* <li className="nav-item">
          <NavLink to="/" className="nav-link" id="home" aria-current="page">
            HOME
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/"><img id="logo"src={image}></img></NavLink>
          {/* <div id="h">
          <h6 id="h6">--“Whisking Up Happiness Daily”--</h6></div> */}
        </li>
         <li className="nav-item home">
          <NavLink to="/" className="nav-link">
            HOME
          </NavLink>
        </li>
        <li className="nav-item cake">
          <NavLink to="/Cakes" className="nav-link">
            CAKES
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Pastries" className="nav-link">
            PASTRIES
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Macarons" className="nav-link">
            MACARONS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Chocolates" className="nav-link">
            CHOCOLATES
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Donuts" className="nav-link">
            DONUTS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Beverages" className="nav-link">
            BEVERAGES
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Contact" className="nav-link end">
            CONTACT US
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to="/Cart"><img  className="img1"src={cart}></img></NavLink>
        </li>
        <li className="nav-item">
         <NavLink to="/Signin"> <img className="img2" src={user}></img></NavLink>
        </li> */}
      </ul>
        
    </div>
    <NavLink to="/Cart"><img  className="cart"src={cart}></img></NavLink>
         <NavLink to="/Signin"> <img className="user" src={user}></img></NavLink>
         <div id="iconwrapper">
<NavLink to="/Cart"><img  className="cartt"src={cartt}></img></NavLink>
         <NavLink to="/Signin"> <img className="userr" src={userr}></img></NavLink>
         </div>
  </div>
</nav>

    </>
  )
}

export default Navbar;
import React from 'react'
import './Signin.css'
import { NavLink } from 'react-router-dom'
// import image from './assets/bg.jpg';
import Footer from './Footer'
import Navbar from './Navbar'

const Signin = () => {
  return (
<>
  <div id="Signinbody">
      <Navbar/>
    <div id="bg" style={{
backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"640px"}}>
    <form class="form1">
      <h1 id="Signin" >Sign In</h1>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter email"
    />
    <br/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
    />
    <br/>
  </div>

  <button type="submit" className="btn btn-primary signbutton" >
    Sign In</button> <p id="signp">Don't have any account? <NavLink to='/Login'>Sign Up</NavLink></p>
  
</form>
</div>
</div>
<Footer/>
</>
)
}

export default Signin
import React from 'react'
import "./Login.css"
import image from './assets/bg.jpg';
import Navbar from './Navbar'
import Footer from './Footer'

const Login = () => {
  return (
    <>
    <div id="Loginbody">
      <Navbar/>
    <div id="bg1" style={{
backgroundRepeat:"no-repeat", backgroundSize:"cover", height:"640px"}}>
    <form class="form2">
    <h1 id="Signup" style={{textAlign:"center",marginLeft:"-40px"}}>Sign Up</h1>
    {/* <form class="form2"> */}
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
    <label htmlFor="exampleInputEmail1"> Confirm your Email address</label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Confirm email"
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
    <label htmlFor="exampleInputPassword1"> Confirm Password</label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
    />
  </div>
<br/>
  <button type="submit" className="btn btn-primary"  id="signbtn">
    Submit
  </button>
</form>
</div>
</div>
<Footer/>
    </>
  )
}

export default Login
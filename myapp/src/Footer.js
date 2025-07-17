import React from 'react'
import './Footer.css'
import image from './assets/logo.png'
import location from './assets/location.png'
import email from './assets/Email.png'
import contact from './assets/Contact.png'
import {NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div id="footer" data-aos="slide-up">
    <footer id="footerr">
      <img id="logo1"src={image} alt="..."/><br/>
      {/* <h1 id="head">Sugar & Sip</h1> */}
      <div id="flexlist">
      <div id="Footerlist" data-aos="slide-up">
        <NavLink to="/" style={{textDecoration:"none"}} className="navlist">HOME</NavLink><br/>
        <NavLink to='/Cakes' style={{textDecoration:"none"}}className="navlist">CAKES</NavLink><br/>
        <NavLink to='/Pastries' style={{textDecoration:"none"}} className="navlist">PASTRIES</NavLink><br/>
        <NavLink to='/Macarons' style={{textDecoration:"none"}} className="navlist">MACARONS</NavLink><br/>
        <NavLink to='/Chocolates' style={{textDecoration:"none"}} className="navlist">CHOCOLATES</NavLink><br/>
        <NavLink to='/Beverages' style={{textDecoration:"none"}} className="navlist">BEVERAGES</NavLink><br/>
        <NavLink to='/Donuts' style={{textDecoration:"none"}} className="navlist">DONUTS</NavLink><br/>
        </div>
        <div id="Contact" data-aos="slide-up">
              
<img src={location} className='address'></img>
<h6 id="h61">ADDRESS</h6>
<p id="p21">Sugar & Sip<br/>
Shop no.77, Ground Floor, Near The Ridge, Shimla </p>

      <img src={email} className='address'></img>
<h6 id="h61">E-MAIL</h6>
<p id="p21" type='email'>contact@sugar&sip.in </p>

      <img src={contact} className='address'></img>
<h6 id="h61">PHONE</h6>
<p id="p21" type="tel">+91 9876543210 </p>
        </div>
           <div id="policy" data-aos="slide-up">
          <NavLink to='/Privacypolicy' style={{textDecoration:"none"}} className="navlist">PRIVACY POLICY</NavLink><br/>
          <NavLink to='/Cookiepolicy' style={{textDecoration:"none"}} className="navlist">COOKIE POLICY</NavLink><br/>
          <NavLink to='/Refundpolicy' style={{textDecoration:"none"}} className="navlist">REFUND POLICY</NavLink><br/>
          <NavLink to='/FAQs' style={{textDecoration:"none"}} className="navlist">FAQs</NavLink><br/>
          <NavLink to='/Nutritionalinfo' style={{textDecoration:"none"}} className="navlist">NUTRITIONAL INFORMATION</NavLink><br/>
        </div>
        </div>
 </footer>
 </div>
    </>
    
  )
}

export default Footer
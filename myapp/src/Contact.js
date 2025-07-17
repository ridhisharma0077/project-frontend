import React from 'react'
import './Contact.css'
import Navbar from './Navbar'
import Footer from './Footer'
import location from './assets/location.png'
import email from './assets/Email.png'
import contact from './assets/Contact.png'

const Contact = () => {
  return (
    <>
    <div id="Contactbody">
      <Navbar/>
      <h1 id="contacthead" data-aos="slide-up">We Would Love To Hear From You❤</h1>
      <div className='Contactflex' data-aos="slide-up">
<div className='contactdiv'>
<img src={location} className='contactdata' ></img>
<h2>Address</h2>
<p>Sugar & Sip<br/>
Shop no.77, Ground Floor, Near The Ridge, Shimla </p>
</div>
      <div className='contactdiv'>
      <img src={email} className='contactdata'></img>
<h2>E-mail</h2>
<p type='email'>contact@sugar&sip.in </p>
</div>
      <div className='contactdiv'>
      <img src={contact}  className='contactdata'></img>
<h2>Phone</h2>
<p type="tel">+91 9876543210 </p>
</div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
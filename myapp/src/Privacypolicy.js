import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Privacypolicy = () => {
  return (
  <>
   <div style={{
    paddingTop:"30px",
    backgroundColor: "#EBEAFF", color:"#547792", fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
}}>
    <Navbar/>
    <div style={{ margin:"40px"}}>
        <h1 style={{textAlign:"center", color:"#E53888"}}>PRIVACY POLICY</h1><br/>
        <ul>
            <li>You provide your personal information (name, email ID, phone number, address
etc.) to us while creating an account with us and/or ordering our products
online/offline through use of Sugar & Sip website/store dine
in/third party.</li>
            <li>We store that information reliably. We use that information to serve you.</li>
            <li>When you visit our website/install application in your mobile phone, we collect
some personally identifiable data to serve you.</li>
            <li>This policy specifies the data collected by us, the manner of collection, and
your rights with respect to your personal data.</li>
            <li>For any kind of complaints and grievances around data protection and your
privacy, you can write to our Grievance office/Data Protection Officer, details of
whom are mentioned in this policy.</li>
            <li>We have implemented appropriate security and privacy measures for the
protection of your data, and we do not sell data for commercial purposes.</li>
            <li> Where you have an independent relationship with any of third party service
provider selling Sugar & Sip’s products and services on their platform, their
privacy statements will apply.</li>

            </ul>
        </div>
        <Footer/>
        </div>
  </>
  )
}

export default Privacypolicy
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Refund.css'

const Refundpolicy = () => {
  return (
      <>
    <div id="Refundbody">
    <Navbar/>
    <div style={{ margin:"20px"}}>
        <h1 style={{textAlign:"center", color:"#E53888",marginBottom:"-10px"}}>REFUND POLICY</h1><br/>
        <h6 style={{textAlign:"center",paddingTop:"10px"}}>Please Note: This is valid only for orders placed online.</h6>
        <h6><spam style={{color:"#E53888"}}>Your money is safe: </spam><br/>If your amount has been deducted from UPI or Debit/Credit Card or Netbanking or Wallet, please do not worry, your money is safe as per Consumer Safegaurding Guidelines</h6>
        <h6><spam style={{color:"#E53888"}}>Important Points</spam>
        <ul>
            <li>It usually happens when bank servers are not able to confirm the payment status immediately</li>
            <li>If bank confirms the payment to our servers within next 15 minutes, your order will be processed automatically</li>
            <li>If bank confirms the payment to our servers after 15 minutes, then our system will reject and initiate the refund automatically</li>
            <li>After refund is initiated, it takes 5-7 working days to get the amount back in your account</li>

            </ul>
        </h6>
        <h6 style={{textAlign:"center"}}>
            For Further Support and Queries
email us at <spam type="email" style={{color:"#E53888"}}>contact@sugar&sip.in</spam>
        </h6>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Refundpolicy
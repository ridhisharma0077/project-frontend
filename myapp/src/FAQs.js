import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const FAQs = () => {
  return (
    <>
     <div style={{
    paddingTop:"20px",
    backgroundColor: "#EBEAFF", color:"#547792", fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"
}}>
    <Navbar/>
    <div style={{ margin:"40px"}}>
        <h1 style={{textAlign:"center", color:"#E53888"}}>FAQs</h1><br/>
        <spam style={{color:"#E53888"}}>About Us</spam>
        <h6><spam style={{fontWeight:"bolder"}}>Q. Who is the owner of Sugar & Sip?</spam><br/>
        Ridhi Sharma is the Founder & Creative Director of Sugar & Sip and set up the 1st Sugar & Sip patisserie in 2004.</h6>
         <spam style={{color:"#E53888"}}>About Our Products</spam>
        <h6><spam style={{fontWeight:"bolder"}}>Q. How do you order from Sugar & Sip?</spam><br/>
        You can order from Sugar & Sip online through our website www.sugar&sip.in by clicking on the ‘Order Online’ option. Alternatively you can order via food aggregator platforms Zomato, Swiggy or Dunzo.
For custom orders, domestic couriers and corporate orders, you can write to us at Click Here. You can also call us at +91 9876543210.</h6>
        <h6><spam style={{fontWeight:"bolder"}}>Q. Can I microwave Sugar & Sip products before consuming them?
</spam><br/>Ideally, our breads should not be microwaved. Our savouries can be grilled or heated in an oven. Our pastries and cakes are best eaten at room temperature – you can remove them from the refrigerator 15-20 minutes before consumption.</h6>
 <spam style={{color:"#E53888"}}>Ingredients & Allergens</spam>
        <h6><spam style={{fontWeight:"bolder"}}>Q. Does Sugar & Sip offer sugar-free products?</spam><br/>We do not offer sugar-free products on our regular menu.</h6>
        <h6><spam style={{fontWeight:"bolder"}}>Q. Are Theobroma products vegan, gluten-free?</spam><br/>We do not offer vegan, gluten-free products on our regular menu.</h6>
        </div>

        <Footer/>
        </div>
    </>
  )
}

export default FAQs
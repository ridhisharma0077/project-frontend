import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Nutritionalinfo.css'

const Nutritionalinfo = () => {
  return (
    <>
    <div id="nutritionaldiv">
    <Navbar/>
    <div id="datainfo">
        <h1 id="h1info">NUTRITIONAL INFORMATION</h1><br/>
        <h5 id="h5info">At Sugar & Sip, we strive to ensure our food not only tastes good, but is also good for you!</h5><br/>
        <div id="flexnutritionalinfo" >
            <div>
                <img src="https://media.istockphoto.com/id/645542956/photo/french-pastry.jpg?s=612x612&w=0&k=20&c=JE4QgqBdtvMqdMvUPRqvnw-hIfftwtSV8qSoPygF0Qk=" id="nutriimg"/>
            </div>
            <div>
        <p id="infop">We offer products which are based on home-style recipes, made with fresh ingredients. We value quality in our products so you can make the right nutritional choices!</p>
        </div>
        </div>
        </div>
        <Footer/></div>
    </>
  )
}

export default Nutritionalinfo
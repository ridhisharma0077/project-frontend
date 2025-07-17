import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import Card from './Card'
import './Cupcakes.css'
import Footer from './Footer'

const Cupcakes = () => {
  return (
    <>
     <div id="Cupcakebody">
        <Navbar/>
        <div className='Cupcakeflex'>
            <div>
                <NavLink to='/Vanillacupcake' className="cupcakenav">
                <Card 
                title="Classic Vanilla Cupcake"
                image="https://media.istockphoto.com/id/1439226201/photo/homemade-vanilla-cupcakes-on-wire-cooking-racks.jpg?s=612x612&w=0&k=20&c=zCb--m6sQERGYJ7GmQ-vKP0g_6XKLvmW3GJEpuQN2Ig="
                description="Light and fluffy with a rich vanilla frosting"
                price="$2.99"/>
                </NavLink>
            </div>
                 <div>
                <NavLink to='/Chocolatecupcake' className="cupcakenav">
                <Card 
                title="Chocolate Fudge Cupcake "
                image="https://media.istockphoto.com/id/514057868/photo/chocolate-cupcakes-on-black.jpg?s=612x612&w=0&k=20&c=GmAnFTHpD9jQF1eFBWCN-KTUutoe3f3cLqhaxe6CL-M="
                description=" Decadent chocolate cake topped with a gooey fudge frosting"
                price="  $3.49"/>
                </NavLink>
            </div>
                 <div>
                <NavLink to='/Redvelvetcupcake' className="cupcakenav">
                <Card 
                title="Red Velvet Cupcake "
                image="https://media.istockphoto.com/id/147307267/photo/cupcakes.jpg?s=612x612&w=0&k=20&c=yGEbUp1SDCh-akr98Dv_U5B8Hblo-ApONZ_AD7GFRQw="
                description=" Soft red velvet cake with smooth cream cheese frosting "
                price="$3.99"/>
                </NavLink>
            </div>
            <div>
                <NavLink to='/Lemonzestcupcake' className="cupcakenav">
                <Card 
                title="Lemon Zest Cupcake"
                image="https://media.istockphoto.com/id/1227176594/photo/lemon-and-poppy-seed-cupcakes-with-cheese-cream-frosting.jpg?s=612x612&w=0&k=20&c=IOSjvfKuUCFBmNov9nhdi6u9nGAKxkpft-CxAwcv-e4="
                description="Zesty lemon cake with a tangy lemon buttercream "
                price="$3.49"/>
                </NavLink>
            </div>
                 <div>
                <NavLink to='/Carrotcupcake' className="cupcakenav">
                <Card 
                title="Carrot Cupcake "
                image="https://media.istockphoto.com/id/1148222181/photo/carrot-cake-muffins-with-mascarpone-cream-topped-with-marzipan-carrots-delicious-homemade.jpg?s=612x612&w=0&k=20&c=RKdxivjAMsF0ltrZGfdMAThobSg56U0RY1-BTvnZym0="
                description=" Moist carrot cake with a sweet cream cheese frosting"
                price="$3.79"/>
                </NavLink>
            </div>
                 <div>
                <NavLink to='/Peanutbuttercupcake' className="cupcakenav">
                <Card 
                title="Peanut Butter Cupcake "
                image="https://media.istockphoto.com/id/1223392988/photo/chocolate-dough-cupcakes-with-peanut-butter-cream-cheese-frosting-and-chocolate-bites-rustic.jpg?s=612x612&w=0&k=20&c=-QJz-3RAqi5Ik3TBSQ2ep5gSwZ4ZnS9mqCYb9WvwGW8="
                description=" Rich peanut butter cake with a creamy peanut butter frosting"
                price="$3.99"/>
                </NavLink>
            </div>
            <div>
                <NavLink to='/Caramelcupcake' className="cupcakenav">
                <Card 
                title="Salted Caramel Cupcake"
                image="https://media.istockphoto.com/id/1366619361/photo/homemade-cupcakes-with-caramel-syrup-and-whipped-cream-cheese.jpg?s=612x612&w=0&k=20&c=xEM3-ThE5jAhNYuwUO3mIrOX4VKHpNAQIKnWXQ_cklg="
                description=" Caramel-infused cake with a salted caramel frosting"
                price="$3.99"/>
                </NavLink>
            </div>
                 <div>
                <NavLink to='/Cookiescupcake' className="cupcakenav">
                <Card 
                title="Cookies and Cream Cupcake"
                image="https://media.istockphoto.com/id/830942802/photo/german-chocolate-cupcakes.jpg?s=612x612&w=0&k=20&c=7M72d5-GvQgEp5JQypJ_mPoJl9IHXrZLLUjf3q7V9lg="
                description=" A delightful combo of chocolate cake with Oreo chunks and creamy frosting "
                price=" $3.79"/>
                </NavLink>
            </div>
                 <div>
                <NavLink to='/Mochacupcake' className="cupcakenav">
                <Card 
                title="Mocha Madness Cupcake  "
                image="https://media.istockphoto.com/id/925590872/photo/chocolate-espresso-cupcakes.jpg?s=612x612&w=0&k=20&c=BwHL1H_wzQbyc3vsNO_eMkGVREJvXsstw7dRut91UjY="
                description=" Coffee-infused cake with a rich mocha buttercream "
                price=" $3.99"/>
                </NavLink>
            </div>
            </div>
            </div>
            <Footer/>
    </>
  )
}

export default Cupcakes
import React from 'react'
import Card from './Card'
import "./Cakes.css"
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

const Cakes = () => {
  return (
    <>
    <div id="Cakesbody">
   <Navbar/>
   <div className='cakesflex'>
       <div><NavLink to='/Cheesecakes' className="nav1" style={{marginTop:"20px"}}>
        <Card 
        title="Cheesecakes"
        image="https://media.istockphoto.com/id/1181424553/photo/different-cake-slices-for-tasting-purpuses.jpg?s=612x612&w=0&k=20&c=twPnMqdhKeCIvoCmNWEWX-SjIK_IBlepRgvYr1pUT5Y="
        description="Cheesecake is a dessert featuring a creamy, tangy filling made with soft cheese, eggs, and sugar"
        price="Explore more"/></NavLink></div>
<div><NavLink to="/Cupcakes" className="nav1">
<Card title="Cupcakes"
image="https://media.istockphoto.com/id/183060524/photo/three-cupcakes.jpg?s=612x612&w=0&k=20&c=n6U-bFrjxvBexyrsnS1ryULEZoKYwH-tuU9PFY-2hLA="
        description="A single-serving mini cake, typically topped with frosting and decorative sprinkles."
        price="Explore more"/></NavLink></div>
       
         <div><NavLink to='/Vanillacake' className="nav1">
        <Card
title="Vanilla Sponge Cake"
image="https://media.istockphoto.com/id/471674596/photo/cake-with-vanilla-cream-in-the-form-of-roses.jpg?s=612x612&w=0&k=20&c=hGN1u19-5FznuYvZuUlTrDiDfMFPDsVwJt-v33Dj0uA="
description="Light, airy, and delicately sweet — a classic vanilla sponge perfect for any occasion"
price="$13"/></NavLink></div>
{/* </div> */}
{/* <div className='cakesflex'> */}
  <div><NavLink to='/Blackforestcake' className="nav1">
<Card 
title="Black Forest Cake"
image="https://media.istockphoto.com/id/1148468700/photo/black-forest-cake-schwarzwald-pie-dark-chocolate-and-cherry-dessert-on-a-white-wooden.jpg?s=612x612&w=0&k=20&c=3nEBphzaDSOVb2pyws76QXHL4Lx8EDfks1raOiU7LVY="
description="Layers of chocolate cake with cherries, whipped cream, and chocolate shavings"
price="$30"/></NavLink></div>
<div><NavLink to='/Carrotcake' className="nav1">
<Card
title="Carrot Cake"
image="https://media.istockphoto.com/id/1170788512/photo/slice-of-homemade-carrot-cake-with-cream-cheese-frosting-side-view-table-scene-against-white.jpg?s=612x612&w=0&k=20&c=0MisjjRRS9OG1qN1FqwXNnoZfJYkab56u8mZblR06AY="
description="Made with fresh carrots, nuts and finished with creame cheese frosting"
price="$27"/></NavLink></div>
<div><NavLink to='/Coffeecake' className="nav1">
<Card
title="Coffee Cake"
image="https://media.istockphoto.com/id/488638362/photo/cinnamon-coffee-cake.jpg?s=612x612&w=0&k=20&c=MguF-LWafti6jhjUu_Yd0dvdKf_9vhIVQy2khbiEJWg="
description="Flavored with real coffee and topped with a cinnamon crumble"
price="$22"/></NavLink></div>
{/* </div> */}
{/* <div className='cakesflex'> */}
  <div><NavLink to='/Strawberrycake' className="nav1">
<Card 
title="Strawberry Cake"
image="https://media.istockphoto.com/id/811407328/photo/strawberry-and-cream-sponge-cake.jpg?s=612x612&w=0&k=20&c=CgNm_Z9GFD4HhQPI0N_2lpKUP66It1cHLrj-y07dpgs="
description="Soft vanilla cake layers filled with fresh strawberries and whipped cream"
price="$26"/></NavLink></div>
<div><NavLink to='/Fruitcake' className="nav1">
<Card
title="Fruit Cake"
        image="https://media.istockphoto.com/id/893429862/photo/beautiful-delicious-homemade-mixed-nut-and-berry-dried-fruit-cake-on-wooden-table.jpg?s=612x612&w=0&k=20&c=4tDrO2dpPQC3rK2PujIwbujvq4Svrm9GKKttQU6sWc8="
        description="Packed with dried fruits and nuts, aged for rich flavor"
        price="$35"/></NavLink></div>
        <div><NavLink to='/Lemoncake' className="nav1">
        <Card
        title="Lemon Drizzle Cake"
        image="https://media.istockphoto.com/id/1181471681/photo/lemon-drizzle-cake.jpg?s=612x612&w=0&k=20&c=8JEIJUlaAGZr5wVB5pW3IcMXjiRsl_0YhVhNHkbTSMA="
        description="Zesty lemon cake with a sugary glaze -light and refreshing"
        price="$23"/></NavLink></div>
        {/* </div> */}
        {/* <div className='cakesflex'> */}
            <div>
   <NavLink to='/Chocolatecake' className="nav1">
    <Card
    title="Chocolate Cake"
    image="https://media.istockphoto.com/id/1191458812/photo/chocolate-layer-cake.jpg?s=612x612&w=0&k=20&c=2plIArpL-W7A26kOafqp5cVY7VznJwbO4YpqNfah8yY="
description ="Rich and moist with layeers of decandent chocolate ganache"
price="$25"/></NavLink></div>  
<div><NavLink to='/Redvelvetcake' className="nav1">
        <Card
title="Red Velvet Cake"
image="https://media.istockphoto.com/id/1444136555/photo/red-velvet-cake.jpg?s=612x612&w=0&k=20&c=j88qkvFzCml3_3kXQWCKcHjsxjAi_fXxEskHZPelInk="
description="Smooth, velvety with a hint of cocoa, topped with creame cheese frosting"
price="$28"/></NavLink></div>
        <div><NavLink to='/Tiramisucake' className="nav1">
        <Card 
        title="Tiramisu Cake"
        image="https://media.istockphoto.com/id/174782923/photo/tiramisu.jpg?s=612x612&w=0&k=20&c=n_Ilk24vdeERnRPGW5EqB9coWgEcveg3-EWGM4CYs4w="
        description="Tiramisu is an Italian dessert made of ladyfinger pastries dipped in coffee"
        price="$50"/></NavLink></div>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Cakes
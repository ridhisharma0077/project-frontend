import React from 'react'
import Navbar from './Navbar'
import {NavLink} from 'react-router-dom'
import './Cheesecakes.css'
import Card from './Card'
import Footer from './Footer'

const Cheesecakes = () => {
  return (
    <>
    <div id="Cheesecakebody">
        <Navbar/>
        <div className='Cheesecakeflex'>
            <div>
                <NavLink to='/Classiccheesecake' className="cheesecakenav">
                <Card 
                title="Classic New York Cheesecake "
                image="https://media.istockphoto.com/id/872346326/photo/homemade-cheesecake-for-dessert-healthy-organic-summer-dessert-pie-cheesecake-cheese-cake.jpg?s=612x612&w=0&k=20&c=l2lBWrHvp4E_4L9NfnwdnvGSh9RNGqZF7WWKMx-gq0k="
                description=" Creamy, smooth, and rich with a buttery graham cracker crust"
                price="$4.99"/>
                </NavLink>
            </div>
             <div>
                <NavLink to='/Strawberrycheesecake' className="cheesecakenav">
                <Card 
                title="Strawberry Cheesecake  "
                image="https://media.istockphoto.com/id/1300616677/photo/homemade-cheesecake-with-white-chocolate-and-strawberries.jpg?s=612x612&w=0&k=20&c=DjDVbjl8L77mzLeHLYuCXI6Cjw69BRrJpNer2BB90U8="
                description="Velvety cheesecake with a swirl of fresh strawberry topping"
                price="$5.49"/>
                </NavLink>
            </div>
             <div>
                <NavLink to='/Chocolatecheesecake' className="cheesecakenav">
                <Card 
                title="Chocolate Cheesecake  "
                image="https://media.istockphoto.com/id/673936686/photo/chocolate-treats.jpg?s=612x612&w=0&k=20&c=LoH65c3BPxvYDoGhY3e9yLuen-Q1E91EPE0dzs9bSSA="
                description="Decadent chocolate-infused cheesecake with a chocolate ganache drizzle"
                price="$5.99"/>
                </NavLink>
            </div>
        {/* </div> */}
         {/* <div className='Cheesecakeflex'> */}
            <div>
                <NavLink to='/Lemoncheesecake' className="cheesecakenav">
                <Card 
                title="Lemon Cheesecake "
                image="https://media.istockphoto.com/id/520496626/photo/lemon-cake.jpg?s=612x612&w=0&k=20&c=Amh9G8QN6h-keJj_zsUHDjsRQMV86TZ8jlkyGHVOpJk="
                description="Tangy lemon filling with a light, creamy texture"
                price="$5.49"/>
                </NavLink>
            </div>
             <div>
                <NavLink to='/Caramelcheesecake' className="cheesecakenav">
                <Card 
                title="Salted Caramel Cheesecake "
                image="https://media.istockphoto.com/id/1282034217/photo/image-of-whole-toffee-caramel-cheesecake-buttery-biscuit-base-fluffy-mascarpone-cream-cheese.jpg?s=612x612&w=0&k=20&c=dNpeFlUKJw1KtsLrivbTIhhyaRTQ5tPe6TSevogW6Ek="
                description=" Rich caramel cheesecake with a salted caramel sauce"
                price="$5.99"/>
                </NavLink>
            </div>
             <div>
                <NavLink to='/Rasberrycheesecake' className="cheesecakenav">
                <Card 
                title="Rasberry Cheesecake  "
                image="https://media.istockphoto.com/id/485191131/photo/raspberry-cake.jpg?s=612x612&w=0&k=20&c=L5xgvWNrqnXlbiSQkqzmB0vMqhfGd57KH45LhA7s2k4="
                description="A perfect blend of cheesecake and raspberry compote"
                price="$5.49"/>
                </NavLink>
            </div>
        {/* </div> */}
         {/* <div className='Cheesecakeflex'> */}
            <div>
                <NavLink to='/Oreocheesecake' className="cheesecakenav">
                <Card 
                title="Oreo Cheesecake "
                image="https://media.istockphoto.com/id/1499734933/photo/chocolate-cake-with-biscuit-stuffed-decoration.jpg?s=612x612&w=0&k=20&c=U6VtBnSILLv_MLpe5zxCWr8GcmelDSkWFKGYVkashCg="
                description="A chocolatey twist with crushed Oreos blended into the creamy filling "
                price="$5.99"/>
                </NavLink>
            </div>
             <div>
                <NavLink to='/Blueberrycheesecake' className="cheesecakenav">
                <Card 
                title="Blueberry Cheesecake  "
                image="https://media.istockphoto.com/id/1558080393/photo/blueberry-cheesecake-with-berries-and-mint-leaves-on-top.jpg?s=612x612&w=0&k=20&c=x-gSR5Wpn04xbrTx1Adt8XB933sRtJHjrQ29GzduXGo="
                description="Classic cheesecake topped with sweet blueberry compote"
                price="$5.49"/>
                </NavLink>
            </div>
             <div>
                <NavLink to='/Mangocheesecake' className="cheesecakenav">
                <Card 
                title="Mango Cheesecake "
                image="https://media.istockphoto.com/id/1358358066/photo/side-view-of-delicious-homemade-mango-cheesecake.jpg?s=612x612&w=0&k=20&c=2jNYvK45-nbn5VSQ6qPMi4ubqNU6NVh_ZXVDwVmdsj4="
                description="Tropical mango puree blended into smooth cheesecake"
                price="$5.49"/>
                </NavLink>
            </div>
        {/* </div> */}
         {/* <div className='Cheesecakeflex'> */}
            <div>
                <NavLink to='/Pistachiocheesecake' className="cheesecakenav">
                <Card 
                title="Pistachio Cheesecake  "
                image="https://media.istockphoto.com/id/1247682425/photo/pistachio-cheesecake-on-the-wooden-table-close-up.jpg?s=612x612&w=0&k=20&c=zyHbp2nNa-Fv9lidJteEYe8pGJDwlcaGTH5l81RqJBU="
                description="Nutty pistachio flavor with a light green tint and crunchy base"
                price="$6.49"/>
                </NavLink>
            </div>
             <div>
                <NavLink to='/Blackforestcheesecake' className="cheesecakenav">
                <Card 
                title="Black Forest Cheesecake  "
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrm1SROYroC5_mCL1MRtyFM0ovWR6Hx4xlQ&s"
                description=" Chocolate cheesecake with cherries and whipped cream on top"
                price="$6.29"/>
                </NavLink>
            </div>
             <div>
                <NavLink to='/Biscoffcheesecake' className="cheesecakenav">
                <Card 
                title="Biscoff Cheesecake  "
                image="https://media.istockphoto.com/id/1460126203/photo/biscoff-lotus-cake.jpg?s=612x612&w=0&k=20&c=X5d9dVMDV492_a5ikmegUZVVV6H0g5rKwED9BQOIJDk="
                description="Spiced Biscoff cookie crust, creamy filling topped with cookie"
                price="$6.29"/>
                </NavLink>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Cheesecakes
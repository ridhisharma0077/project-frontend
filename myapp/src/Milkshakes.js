import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import Card from './Card'
import './Milkshakes.css'

export const Milkshakes = () => {
  return (
    <>
    <div id="Milkshakesbody">
        <Navbar/>
        <div id="Milkshakesflex">
        <div>
            <NavLink to='/Vanillashake' className="milkshakesnav">
            <Card
            title="Classic Vanilla  "
            image="https://media.istockphoto.com/id/542952144/photo/vanilla-milkshake-with-whipped-cream-and-sprinkles.jpg?s=612x612&w=0&k=20&c=uXxAcmgMdwl5BTZfmsXtAHznQ0Jz2EkiEwm3wTcjm1w="
            description="Smooth and creamy with rich vanilla flavor"
            price="$4.49"/>
            </NavLink>
        </div>
         <div>
            <NavLink to='/Chocolateshake' className="milkshakesnav">
            <Card
            title="Chocolate Fudge Shake "
            image="https://media.istockphoto.com/id/1216108706/photo/homemade-dessert-chocolate-mousse.jpg?s=612x612&w=0&k=20&c=DhAf4dDS64gxB-BpO4YjWtGTRzcb4udpRsyt4r98mjY="
            description="Rich chocolate with a fudge swirl"
            price="$5.20"/>
            </NavLink>
        </div>
         <div>
            <NavLink to='/Strawberryshake' className="milkshakesnav">
            <Card
            title="Strawberry Bliss Shake "
            image="https://media.istockphoto.com/id/1334838472/photo/two-strawberry-smoothie-or-milkshake-with-berries-and-mint-in-glass-on-light-pink-background.jpg?s=612x612&w=0&k=20&c=9cQ9AZKXwU7MLjv-I31mWqujwVZGChj85btBjK4B80Y="
            description="Fresh strawberries in a smooth, chilled treat"
            price="$4.75"/>
            </NavLink>
        </div>
        {/* </div> */}
           {/* <div id="Milkshakesflex"> */}
        <div>
            <NavLink to='/Oreoshake' className="milkshakesnav">
            <Card
            title="Oreo Crunch Shake "
            image="https://media.istockphoto.com/id/1308045724/photo/cold-coffee-frappuccino.jpg?s=612x612&w=0&k=20&c=nO94nkQxAj0oJXAr4BpHOmKsaLDu5lq4i_Md2rtabbQ="
            description="Crushed Oreos in creamy vanilla ice cream"
            price="$5.50"/>
            </NavLink>
        </div>
         <div>
            <NavLink to='/Bananashake' className="milkshakesnav">
            <Card
            title="Banana Caramel Shake "
            image="https://media.istockphoto.com/id/1496847724/photo/banana-smoothie-with-oats-healthy-food-detox-vegan-or-vegetarian-diet-food-concept.jpg?s=612x612&w=0&k=20&c=V2WSGeApPSfk7jtyBWIYwfmWVshboiSJmp1v46YEwkE="
            description="Ripe bananas with a drizzle of caramel"
            price="$5.00"/>
            </NavLink>
        </div>
         <div>
            <NavLink to='/Peanutbuttershake' className="milkshakesnav">
            <Card
            title="Peanut Butter Shake "
            image="https://media.istockphoto.com/id/522334972/photo/peanut-butter-banana-oat-smoothie-on-rustic-wood-with-scattered-ingredients.jpg?s=612x612&w=0&k=20&c=F_0O7J_x36jHY7-eVMYoOdjEMlnahMTH7_kDCXO6XUA="
            description="Smooth peanut butter and vanilla fusion"
            price="$5.25"/>
            </NavLink>
        </div>
        {/* </div> */}
           {/* <div id="Milkshakesflex"> */}
        <div>
            <NavLink to='/Mangoshake' className="milkshakesnav">
            <Card
            title="Mango Tango Shake "
            image="https://media.istockphoto.com/id/1330790678/photo/close-up-image-knickerbocker-glasses-mango-milkshake-topped-with-swirls-of-whipped-cream-and.jpg?s=612x612&w=0&k=20&c=eXa6Jmr_-fFXlLGb9-GyTkoKKO_sl1_F9SXY6oSaALc="
            description="Tropical mango flavor with a citrus twist"
            price="$4.75"/>
            </NavLink>
        </div>
         <div>
            <NavLink to='/Coffeemochashake' className="milkshakesnav">
            <Card
            title="Coffee Mocha Shake "
            image="https://media.istockphoto.com/id/953747804/photo/iced-mocha-coffee-with-whip-cream-summer-drinking-times-coffee-beans-rustic-textured-wooden.jpg?s=612x612&w=0&k=20&c=2PXJdteWQ9K5OPfARixdMt4XOJr7NqU-QlFVjwyMCFs="
            description="Coffee and chocolate blended with ice cream"
            price="$5.25"/>
            </NavLink>
        </div>
         <div>
            <NavLink to='/Mintshake' className="milkshakesnav">
            <Card
            title="Mint Choco Chip Shake "
            image="https://media.istockphoto.com/id/1031055400/photo/food.jpg?s=612x612&w=0&k=20&c=pKVt6jwSvfPq660pvSmBTvBu5FqZ2oHeLkExmxNF7UM="
            description="Refreshing mint and chocolate chips"
            price="$5.00"/>
            </NavLink>
        </div>
        {/* </div> */}
           {/* <div id="Milkshakesflex"> */}
        <div>
            <NavLink to='/Blueberryshake' className="milkshakesnav">
            <Card
            title="Blueberry Shake"
            image="https://media.istockphoto.com/id/482828352/photo/blueberrie-smoothie.jpg?s=612x612&w=0&k=20&c=bZwSE8nb1ilX4TOXms76-wj5CNnnrJBB-3du4ir4lc4="
            description=" Blueberries and cheesecake chunks"
            price="$5.75"/>
            </NavLink>
        </div>
         <div>
            <NavLink to='/Caramelshake' className="milkshakesnav">
            <Card
            title="Salted Caramel Shake"
            image="https://media.istockphoto.com/id/1443907759/photo/iced-caramel-latte-topped-with-whipped-cream-and-caramel-sauce.jpg?s=612x612&w=0&k=20&c=JRAG_zgNoE2Z54OUQW_PAFQa542KcNxR4C_ipMdQWRk="
            description="  Sweet caramel with a hint of sea salt"
            price="$5.25"/>
            </NavLink>
        </div>
         <div>
            <NavLink to='/Redvelvetshake' className="milkshakesnav">
            <Card
            title="Red Velvet Shake"
            image="https://media.istockphoto.com/id/1950505573/photo/red-velvet-smoothie-with-strawberry-whipped-cream-topping-and-red-fruits-and-strawberry-syrup.jpg?s=612x612&w=0&k=20&c=W6I_Gxww0R6_E4ki2FoLbmk3AbzfTrMyTKFwIOkvJTM="
            description="Velvety red cake blended with ice cream"
            price=""/>
            </NavLink>
        </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Milkshakes
import React from 'react'
import "./Beverages.css"
import Card from "./Card"
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

const Beverages = () => {
  return (
 <>
 <div id="Chocolatesbody">
  <Navbar/>
    <div className='Chocolatesflex'>
    <div>
    <NavLink to="/Smoothies" className='nav6'>
<Card
title="Fruit Smoothies"
image="https://media.istockphoto.com/id/1147899614/photo/berry-fruit-cocktails-smoothies-and-milkshakes-fresh-fruit-and-berries-on-brown-table-still.jpg?s=612x612&w=0&k=20&c=YxDCAaxMVfS3_aUvclySuxSyejbqqe90f_7Du527nWs="
description="Refreshing and packed with natural goodness, our fruit smoothies blend flavor and health in every sip."
price="Explore more"/></NavLink></div>
<div>
<NavLink to='/Freshjuices' className='nav6'>
<Card
title="Fresh Juices"
image="https://media.istockphoto.com/id/487402642/photo/fresh-juice.jpg?s=612x612&w=0&k=20&c=hjrPG05Pks54_dTutZEd31GIqua9LCG5-sOHMBHq-DA="
description="Squeezed or blended fruit juices like orange, apple, or watermelon."
price="Explore more"/></NavLink></div>
<div><NavLink to='/Milkshakes' className='nav6'>
<Card
title="Millkshakes"
image="https://media.istockphoto.com/id/1332118722/photo/three-glasses-of-milkshake-with-assorted-flavors-chocolate-vanilla-and-strawberry-milkshake.jpg?s=612x612&w=0&k=20&c=2OJv0nP7z8DsufpubtZMCAGiZpbT382ZAbuvSgIvnxM="
description="Blended milk and ice cream with flavors like chocolate, vanilla, or strawberry."
price="Explore more"/> </NavLink></div>
{/* <div className='Chocolatesflex'> */}
    <div>
    <NavLink to="/Espresso" className='nav6'>
<Card
title="Espresso"
image="https://media.istockphoto.com/id/157509191/photo/double-espresso-shot.jpg?s=612x612&w=0&k=20&c=HOOwVH_kMb8iRAGDFAc6b7tG3ENQZh6bbXt0Doo78zc="
description="A strong shot of pure coffee made by forcing hot water through fine coffee grounds."
price="$3"/></NavLink></div>
<div><NavLink to='/Americano' className='nav6'>
<Card
title="Americano"
image="https://media.istockphoto.com/id/1030155158/photo/closeup-image-of-a-hand-holding-a-blue-cup-of-hot-coffee-with-smoke-on-wooden-table-in-cafe.jpg?s=612x612&w=0&k=20&c=Hpmm7nKU-TDQrsXbNcXTp8XU5-6LLsGy3bSjwooX1nQ="
description="Espresso diluted with hot water for a smoother, less intense taste."
price="$3.5"/></NavLink></div>
<div><NavLink to='/Cappuccino' className='nav6'>
<Card
title="Cappuccino"
image="https://media.istockphoto.com/id/505168330/photo/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks.jpg?s=612x612&w=0&k=20&c=h7v8kAfWOpRapv6hrDwmmB54DqrGQWxlhP_mTeqTQPA="
description="Espresso with steamed milk and milk foam — creamy and rich."
price="$4.5"/> </NavLink></div>
  {/* <div className='Chocolatesflex'> */}
    <div>
    <NavLink to="/Latte" className='nav6'>
<Card
title="Latte"
image="https://media.istockphoto.com/id/173245886/photo/cappuccino.jpg?s=612x612&w=0&k=20&c=M622fenNX65OGemtZR0LDCq4LVvxNZJygI5Y4D4NV9g="
description="Espresso with more steamed milk and a light layer of foam — smooth and mild."
price="$5"/></NavLink></div>
<div><NavLink to='/Mocha' className='nav6'>
<Card
title="Mocha"
image="https://media.istockphoto.com/id/1887719094/photo/mocha-chocolate-with-coffee-beans-served-in-glass-isolated-on-table-side-view-of-healthy-drink.jpg?s=612x612&w=0&k=20&c=jIJl4b8hs7DmkKl8zirFVr56lNbZLgfWPkbrm5pCzp4="
description="A latte with added chocolate syrup or cocoa powder — sweet and rich."
price="$5.5"/></NavLink></div>
<div><NavLink to='/Hotchocolate' className='nav6'>
<Card
title="Hot Chocolate"
image="https://media.istockphoto.com/id/803432376/photo/homemade-spicy-hot-chocolate-with-cinnamon.jpg?s=612x612&w=0&k=20&c=pXl1-IfBSnw1rzQRfx_cXmu1mjF32B-hT0LUfEGMnsA="
description="	Creamy drink made with melted chocolate or cocoa powder and steamed milk."
price="$4.5"/> </NavLink></div>
  {/* <div className='Chocolatesflex'> */}
    <div>
    <NavLink to="/Masalachai" className='nav6'>
<Card
title="Masala Chai"
image="https://media.istockphoto.com/id/1336601313/photo/top-view-of-indian-herbal-masala-chai-or-traditional-beverage-tea-with-milk-and-spices-kerala.jpg?s=612x612&w=0&k=20&c=txjXqXtu3_PcA0ztNxyNVXJ-YziORr2XnuHWIriNEKk="
description="	Spiced Indian tea made with milk, black tea, and aromatic spices like cardamom."
price="$3.5"/></NavLink></div>
<div><NavLink to='/Icedcoffee' className='nav6'>
<Card
title="Iced Coffee"
image="https://media.istockphoto.com/id/1366850534/photo/glass-of-a-iced-coffee-with-cream-milk-cold-brew-coffee-drink-with-ice.jpg?s=612x612&w=0&k=20&c=1ZN8z8n-Yo2LpN7gBPGw3fw8QDLAWfsA0vbkeV1z8dg="
description="Chilled coffee served over ice, can be sweetened or flavored."
price="$4.5"/></NavLink></div>
</div>
</div>
<Footer/>
 </>
  )
}

export default Beverages
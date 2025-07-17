import React from 'react'
import './Macarons.css'
import Card from "./Card"
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

const Macarons = () => {
  return (
    <>
    <div id="Macaronsbody">
      <Navbar/>
      <div className='Macaronflex'>
        <div><NavLink to='/Vanillamacaron' className='nav3'>
<Card 
title="Vanilla"
image="https://media.istockphoto.com/id/177336941/photo/vanilla-macaroons-on-white-wooden-surface.jpg?s=612x612&w=0&k=20&c=E8L1EmcTNCUmc8pZuLTM1SKC5XwS83PnbUVhon_6_3s="
description="Macaron with a creamy vanilla bean ganache or buttercream center."
price="$2.5"/>
</NavLink></div>
<div><NavLink to='/Chocolatemacaron' className="nav3">
<Card 
title="Chocolate"
image="https://media.istockphoto.com/id/1130475431/photo/chocolate-macarons.jpg?s=612x612&w=0&k=20&c=Fjn6k60RSfKyAABr_rsqOZwrBszIrqknQ15KVaB6pqw="
description="	Rich cocoa-flavored shell with dark or milk chocolate ganache filling."
price="$2.75"/>
</NavLink></div>
<div><NavLink to='/Rasberrymacaron' className="nav3">
<Card 
title="Rasberry"
image="https://media.istockphoto.com/id/1500821212/photo/closeup-shot-of-pastel-colored-macarons-mix-on-wood-table.jpg?s=612x612&w=0&k=20&c=yamY9gxzkFR-c7KbAZXMowRTvvrr0ZF3foWLGTd3L5E="
description="	Tart raspberry jam or buttercream between pink almond shells."
price="$2.75"/></NavLink></div>
{/* <div className='Macaronflex'> */}
        <div><NavLink to='/Pistachiomacaron' className='nav3'>
<Card 
title="Pistachio"
image="https://media.istockphoto.com/id/2102221992/photo/sweet-crispy-french-macaron-dessert-with-pistachio-ganache-decorated-with-nuts-and-cream.jpg?s=612x612&w=0&k=20&c=hx3zzWgwk3tQ66JE1jpa5bO8EY3V64HK5XeZwwmDljA="
description="Nutty and subtly sweet with pistachio buttercream or ganache."
price="$3"/>
</NavLink></div>
<div><NavLink to='/Caramelmacaron' className="nav3">
<Card 
title="Salted Caramel"
image="https://media.istockphoto.com/id/2160559350/photo/macaroons.jpg?s=612x612&w=0&k=20&c=PD2UV-EEWDmEfvuASMzsielWqrSTqPpM0590ZqJ_AaU="
description="	Sweet and salty caramel filling inside crisp golden shells."
price="$3"/>
</NavLink></div>
<div><NavLink to='/Lemonmacaron' className="nav3">
<Card 
title="Lemon"
image="https://media.istockphoto.com/id/2209792705/photo/delicious-lemon-macarons-resting-on-a-white-plate.jpg?s=612x612&w=0&k=20&c=-dJyJq2fIIN5qabN4yQzTlUyx2olYI2l_ZyvrLt8s-Y="
description="	Zesty lemon curd or buttercream for a bright, citrusy bite."
price="$2.75"/></NavLink></div>
{/* <div className='Macaronflex'> */}
        <div><NavLink to='/Lavendermacaron' className='nav3'>
<Card 
title="Lavender"
image="https://media.istockphoto.com/id/1335368847/photo/french-macarons-with-lavender-flavor-and-fresh-lavender-flowers.jpg?s=612x612&w=0&k=20&c=PNHLvLynd4tw5iwMsJgkYEJxer-0zMiqNSG8F0LRKFQ="
description="Floral & elegant with light lavender buttercream, sometimes honey-infused."
price="$3"/>
</NavLink></div>
<div><NavLink to='/Strawberrymacaron' className="nav3">
<Card 
title="Strawberry"
image="https://media.istockphoto.com/id/1192901044/photo/delicious-strawberry-macarons.jpg?s=612x612&w=0&k=20&c=J0koKM3VcEozeMN-f4PGhnnOT8Kh4FqVYkQY6koNcWQ="
description="Fruity and sweet with strawberry jam or cream filling."
price="$2.75"/>
</NavLink></div>
<div><NavLink to='/Matchamacaron' className="nav3">
<Card 
title="Matcha"
image="https://media.istockphoto.com/id/982838482/photo/green-french-macarons-on-a-green-background.jpg?s=612x612&w=0&k=20&c=m5saa9rZ6j_U93sX7URugXw7PNxJ-7bHSigg6h5mc_k="
description="Earthy and slightly bitter, filled with matcha-infused white chocolate ganache."
price="$3"/></NavLink></div>
{/* <div className='Macaronflex'> */}
        <div><NavLink to='/Tiramisumacaron' className="nav3">
<Card 
title="Tiramisu"
image="https://media.istockphoto.com/id/2199616730/photo/closeup-of-stack-of-delectable-tiramisu-macarons-on-a-black-plate.jpg?s=612x612&w=0&k=20&c=P4Hs3JG1rnGwL8UR-VENVGC_OuAuYG84YV5_NRhCKbg="
description="Coffee & mascarpone filling, dusted with cocoa, inspired by Italian dessert."
price="$3.25"/>
</NavLink></div>
<div><NavLink to='/Blueberrymacaron' className="nav3">
<Card 
title="Blueberry"
image="https://media.istockphoto.com/id/507654991/photo/macaroons.jpg?s=612x612&w=0&k=20&c=Te7naKrYvkeuSGimngwKPkofHKmHNlJSD0hxwFbxQ8M="
description="Blueberry preserve with a light cream cheese-based filling."
price="$3"/></NavLink></div>
<div><NavLink to='/Rosemacaron' className="nav3">
<Card 
title="Rose"
image="https://media.istockphoto.com/id/1460748446/photo/concept-of-tasty-dessert-with-macaroons-on-gray-textured-table.jpg?s=612x612&w=0&k=20&c=JZ8Clx-pIXBKA0Ql1PiFOfqT72RQdbT0Wwgpz3BeiEQ="
description="	Delicate rose-flavored buttercream — light and floral."
price="$2.75"/></NavLink></div></div>
</div>
<Footer/>
    </>
  )
}

export default Macarons
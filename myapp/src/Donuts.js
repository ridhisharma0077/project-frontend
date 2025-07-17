import React from 'react'
import './Donuts.css'
import Card from "./Card"
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

const Donuts = () => {
  return (
    <>
    <div id="Donutsbody">
      <Navbar/>
      <div className="Donutsflex">
        <div>
          <NavLink to="/Glazeddonut" className="nav4">
    <Card
    
    title="Glazed Donut"
    image="https://media.istockphoto.com/id/484234550/photo/homemade-round-glazed-donuts.jpg?s=612x612&w=0&k=20&c=lM3vA8kaKyNZXTtyM0QTja4A5HZru-y9Q0ru3bw0AwI="
description ="Classic yeast-raised donut coated in a sweet sugar glaze."
price="$2"/></NavLink></div>
<div><NavLink to='/Chocolateglazed' className="nav4">
<Card
    
title="Jelly Filled"
image="https://media.istockphoto.com/id/1321318947/photo/frosted-vanilla-donuts-filled-with-blueberry-filling.jpg?s=612x612&w=0&k=20&c=zS4U6TF_Lsml7jOewv0QUv2U38lHz0mjjhZjbyT85yY="
description ="	Round donut filled with fruit jam (raspberry or strawberry)."
price="$2.5"/></NavLink></div>
<div><NavLink to='/Bostondonut' className="nav4">
<Card
    
title="Chocolate Glazed"
image="https://media.istockphoto.com/id/1211186709/photo/chocolate-doughnut-with-sprinkles.jpg?s=612x612&w=0&k=20&c=9PvpbdHfqlwx_BfPxJOW5bkqDapH1JQs64K5tjIrryY="
description ="Same as glazed donut but topped with chocolate glaze."
price="$2.5"/></NavLink></div>
<div><NavLink to='/Sugardonut' className="nav4">
<Card
    
title="Powdered Sugar Donut"
image="https://media.istockphoto.com/id/517046111/photo/breakfast-with-donuts-and-honey.jpg?s=612x612&w=0&k=20&c=_-eXg0rGbELxq6aY9lfIh9dv-aKeUAARjUJg29byPJs="
description ="	Coated with a layer of fine powdered sugar, light & sweet."
price="$2"/></NavLink></div>
{/* <div className="Donutsflex"> */}
<div><NavLink to='/Jellyfilleddonut' className="nav4">
{/* <Card
    
title="Jelly Filled"
image="https://media.istockphoto.com/id/1321318947/photo/frosted-vanilla-donuts-filled-with-blueberry-filling.jpg?s=612x612&w=0&k=20&c=zS4U6TF_Lsml7jOewv0QUv2U38lHz0mjjhZjbyT85yY="
description ="	Round donut filled with fruit jam (typically raspberry or strawberry)."
price="$2.5"/></NavLink></div>
<div><NavLink to='/Bostondonut' className="nav4"> */}
<Card
    
title="Boston Donut"
image="https://media.istockphoto.com/id/652356990/photo/donuts.jpg?s=612x612&w=0&k=20&c=KlqdLl4YdQTXGsWM5l5MytT8neCB9RS7EUwOMLpXr4Q="
description ="Filled with custard and topped with chocolate icing."
price="$3"/></NavLink></div>
<div><NavLink to='/Custardfilleddonut' className="nav4">
<Card
    
title="Custard-filled"
image="https://media.istockphoto.com/id/177248190/photo/sweet-krapfen-pastry.jpg?s=612x612&w=0&k=20&c=MLavPAa5W0PD2SJBva8ckrfk7oenb6PopKxZD6ETdx0="
description ="Similar to Boston cream, but topped with powdered sugar."
price="$3"/></NavLink></div>
{/* <div className="Donutsflex"> */}
<div><NavLink to='/Cruller' className="nav4">
<Card
    
title="Cruller"
image="https://media.istockphoto.com/id/1190494706/photo/homemade-sweet-french-cruller-donuts.jpg?s=612x612&w=0&k=20&c=P29DviVrwG_naLe-5qNA-moBz5YF3ATgwlamgcwp1zg="
description ="	Twisted donut, light and airy — often glazed or sugar-dusted."
price="$2.5"/></NavLink></div>
<div><NavLink to='/Maplebar' className="nav4">
<Card
    
title="Maple-bar"
image="https://media.istockphoto.com/id/2169819983/photo/maple-bacon-bars.jpg?s=612x612&w=0&k=20&c=u2geHnC5yYzgbhZwRTCc4yFryZdG6bWYR60PnfqvyCQ="
description ="Bar-shaped donut topped with maple icing."
price="$3"/></NavLink></div>
<div><NavLink to='/Longjohn' className="nav4">
<Card
    
title="Long John"
image="https://media.istockphoto.com/id/509717788/photo/plated-selection-of-fresh-cream-and-jam-filled-doughnut-desserts.jpg?s=612x612&w=0&k=20&c=dH4W6evKHx7cjb0CGv4CjmM2-bGt7PJcDzz2LelnxSc="
description ="Long rectangular donut, filled or topped with chocolate, maple, or custard."
price="$3"/></NavLink></div>
{/* <div className="Donutsflex"> */}
<div><NavLink to='/Churrodonut' className="nav4">
<Card
    
title="Churro Donut"
image="https://media.istockphoto.com/id/1808237503/photo/homemade-stuffed-churros-recipe.jpg?s=612x612&w=0&k=20&c=zuvAmrZc8GtkJBbkJIvlenUjjHrFq1rP12DRITc1vqc="
description ="Donut-style churro, coated in cinnamon sugar, crunchy on the outside."
price="$3.5"/></NavLink></div>
<div><NavLink to='/Sprinkleddonut' className="nav4">
<Card
    
title="Sprinkled Donut"
image="https://media.istockphoto.com/id/1362188647/photo/strawberry-flavored-donut-with-colorful-sprinkles.jpg?s=612x612&w=0&k=20&c=2a6FxGyDLjcTb7te7VIaBFoUzJ15hGqT_xS4b6POVCI="
description ="Glazed or frosted donut with colorful sprinkles — fun and festive!"
price="$2.5"/></NavLink></div>
</div></div>
<Footer/>
    </>
  )
}

export default Donuts
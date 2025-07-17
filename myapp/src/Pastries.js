import React from 'react'
import './Pastries.css'
import Card from './Card'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Pastries = () => {
  return (
    <>
  <div id="Pastriesbody">
    <Navbar/>
    <div className='pastryflex'>
        <div>
            <NavLink to="/Frangipanetart" className="nav2">
    <Card
    
    title="Frangipane Tart"
    image="https://media.istockphoto.com/id/1333238353/photo/open-pie-with-peaches-and-frangipane.jpg?s=612x612&w=0&k=20&c=_VQhogYfOuYn9mYcQx-dMtPtBlT3IxC-7lrDXkzI4mg="
description ="Almond cream filling in a tart shell, sometimes with fruits like pear."
price="$6"/></NavLink></div>
<div>
    <NavLink to="/Ensaymada" className="nav2">
 <Card
    
    title="Ensaymada"
    image="https://media.istockphoto.com/id/2189167150/photo/ensaymada-is-filipino-soft-bread-covered-with-butter-and-sugar-then-topped-with-greated-cheese.jpg?s=612x612&w=0&k=20&c=M3rgJTMqDfMia0_0pxgXdIFn6eYwBAfYC2QQPFp-ZLY="
description ="Soft, sweet pastry topped with butter, sugar, and cheese."
price="$4"/></NavLink></div>
<div>
    <NavLink to="/Pasteldenata" className="nav2">
 <Card
    
    title="Pastel de Nata"
    image="https://media.istockphoto.com/id/1173505402/photo/egg-tart-traditional-portuguese-dessert-pastel-de-nata-on-a-parchment-paper-blue-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=kinaqdI24eFQvyV0a9pnnP_6OCY9ifojG50QbIwOJrk="
description ="Small custard tart in a crisp pastry shell, often dusted with cinnamon."
price="$3.5"/></NavLink></div>
 {/* <div className='pastryflex' > */}
        <div>
            <NavLink to="/Croissant" className="nav2">
 <Card
    
    title="Croissant"
    image="https://media.istockphoto.com/id/1493889527/photo/cropped-image-of-an-asian-woman-using-tongs-to-pick-up-an-almond-croissant-from-a-bakery-store.jpg?s=612x612&w=0&k=20&c=4kswZYtrNEYfhQ7Z--SLZBXDZp1NlTakb2dcfDv8D2A="
description ="Buttery, flaky pastry with a light, layered texture — can be glazed with sugar."
price="$4"/></NavLink></div>
<div>
    <NavLink to="/Danishpastry" className="nav2">
 <Card
    
    title="Danish Pastry"
    image="https://media.istockphoto.com/id/1161371771/photo/cinnamon-danish.jpg?s=612x612&w=0&k=20&c=3-m-xt4cspxcCKzNvZBLlfImKEDwWKpgdsgyIeukWT8="
description ="Layered pastry often filled with fruit, cream cheese, or custard."
price="$5"/></NavLink></div>
<div>
    <NavLink to="/Eclair" className="nav2">
 <Card
    
    title="Eclair"
    image="https://media.istockphoto.com/id/1511918117/photo/traditional-french-eclairs-with-chocolate.jpg?s=612x612&w=0&k=20&c=2ZgK0fiFKPIxTrD6SjCR_xc4xyjgZAhL3GyL9X9L7Us="
description ="	A long choux pastry filled with cream and topped with chocolate icing."
price="$5.5"/></NavLink></div>
{/* <div className='pastryflex'> */}
        <div>
            <NavLink to="/Cinnamonroll" className="nav2">
 <Card
    
    title="Cinnamon Roll"
    image="https://media.istockphoto.com/id/184296528/photo/breakfast.jpg?s=612x612&w=0&k=20&c=1NNdbYZEPbPTpwlSupFFdXvZ9Bt0cT9JLFRLtVOgIb4="
description ="Sweet rolled dough with cinnamon-sugar filling, glazed or frosted."
price="$5"/>
</NavLink></div>
<div>
    <NavLink to="/Palmier" className="nav2">
 <Card
    
    title="Palmier"
    image="https://media.istockphoto.com/id/1440549474/photo/palmier-cookies-on-a-wooden-board-in-the-kitchen-heart-shaped-biscuits-for-st-valentines-day.jpg?s=612x612&w=0&k=20&c=eKMyz3240J3-_nD9JjFx-UccZWQLcPvg0QAVA91nKDY="
description ="Crisp puff pastry in a heart shape, caramelized with sugar."
price="$3.5"/>
</NavLink></div>
<div>
    <NavLink to="/Strudel" className="nav2">
 <Card
    
    title="Strudel"
    image="https://media.istockphoto.com/id/121128517/photo/apple-strudel.jpg?s=612x612&w=0&k=20&c=wrMFwv7s38DhZxPhvMY6FeENGbt7No1EUkhHRbib8R8="
description ="Thin layered pastry rolled with apple, cinnamon, and sometimes raisins."
price="$5.5"/></NavLink></div>
{/* <div className='pastryflex'> */}
        <div>
            <NavLink to="/Sweetkhari" className="nav2">
 <Card
    
    title="Sweet Khari"
    image="https://media.istockphoto.com/id/1277721020/photo/classic-jeera-khari-or-puff-pastry-in-a-glass-plate-on-a-black-surface-shot-of-freshly-baked.jpg?s=612x612&w=0&k=20&c=esWIzL1UuF0O_Dh9ybePv0ngqoP4m3ocrdtayX25MOU="
description ="	Flaky puff pastry with sugar crystals or caramel glaze, very light."
price="$3"/></NavLink></div>
<div>
    <NavLink to="/Coconuttart" className="nav2">
 <Card
    
    title="Coconut Tart"
    image="https://media.istockphoto.com/id/945424510/photo/stack-of-coconut-tarts-on-wooden-table.jpg?s=612x612&w=0&k=20&c=lPh6HAXbXBpM8qb9_rMvFIGaldCagNYNauiovLL9hx0="
description ="Mini tart filled with sweetened coconut, sometimes with condensed milk."
price="$3.5"/></NavLink></div>
<div>
    <NavLink to="/Custardbun" className="nav2">
 <Card
    
    title="Custard Bun"
    image="https://media.istockphoto.com/id/1303741673/photo/homemade-fresh-yeast-buns-with-custard-filling-with-powdered-sugar-on-black-metal-grille-buns.jpg?s=612x612&w=0&k=20&c=3FhAJks-jjRCL1K7mSTspDI4OPJvw0YlbamrHI6_4yg="
description ="Soft baked bun with smooth sweet egg custard filling inside."
price="$4"/></NavLink></div>
{/* <div className='pastryflex'> */}
        <div>
            <NavLink to="/Millefeuille" className="nav2">
 <Card
    
    title="Mille-feuille"
    image="https://media.istockphoto.com/id/821353264/photo/strawberry-puff-mille-feuille-with-strawberry.jpg?s=612x612&w=0&k=20&c=s04wy60JapoTCaKAe3ja3S-h6Dqm340ZgGEspYiSNYk="
description ="Layers of puff pastry with cream or custard filling, glazed top."
price="$6"/></NavLink></div>
<div>
    <NavLink to="/Baklava" className="nav2">
 <Card
    
    title="Baklava"
    image="https://media.istockphoto.com/id/183422455/photo/perfect-baklava-with-pistachio-arranged-on-a-white-plate.jpg?s=612x612&w=0&k=20&c=PrqSbfqsNKkLa1U9CNi6M2aT4pV98aDxX2_cQiqOxo0="
description ="Filo layers with nuts and honey or syrup, rich and sweet."
price="$5"/></NavLink></div>
<div>
    <NavLink to="/Creamhorn" className="nav2">
 <Card
     title="Cream Horn"
    image="https://media.istockphoto.com/id/2193857253/photo/puff-pastry-cream-horn.jpg?s=612x612&w=0&k=20&c=NqYQ0Hxm2wE5Dw2SQwiw9B3CmiUelWLPG-FlicGdeNE="
description ="	Cone-shaped puff pastry filled with whipped cream or custard."
price="$4.5"/></NavLink></div>
</div>
</div>
<Footer/>
    </>
  )
}

export default Pastries
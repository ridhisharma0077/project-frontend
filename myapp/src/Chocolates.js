import React from 'react'
import './Chocolates.css'
import Card from "./Card"
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'

const Chocolates = () => {
  return (
    <>
    <div id="Chocolatesbody">
      <Navbar/>
      <div className='Chocolatesflex'>
        <div><NavLink to='/Darkchocolate' className='nav5'>
    <Card
    title="Dark Chocolate"
    image="https://media.istockphoto.com/id/463813283/photo/dark-chocolate-bar-on-rustic-wood-table.jpg?s=612x612&w=0&k=20&c=Iqn9b88bb7jaR_4jroHtz-vWIqUeF0BldJtXFLIVAH4="
    description="Rich in cocoa (50–90%), slightly bitter, lower in sugar, often used in gourmet bars."
    price="$6"/></NavLink></div>
    <div><NavLink to='/Milkchocolate' className='nav5'>
 <Card
    title="Milk Chocolate"
    image="https://media.istockphoto.com/id/465869488/photo/chocolate-stack-piled-on-a-wooden-background.jpg?s=612x612&w=0&k=20&c=v3ugMM27DzNXU0xrMH1OgDLuTQbGKGnxwkaAIKy064A="
    description="Sweet, creamy chocolate made with cocoa, sugar, and milk solids."
    price="$4"/></NavLink></div>
    <div><NavLink to='/Whitechocolate' className='nav5'>
     <Card
    title="White Chocolate"
    image="https://media.istockphoto.com/id/157679448/photo/pips-of-baking-white-chocolate-pieces.jpg?s=612x612&w=0&k=20&c=k0YOBmRUmogFEU5LjjKaycE9OLh_GDkOxiCeIo6AZqA="
    description="Made with cocoa butter, milk solids, and sugar — no cocoa solids, sweet and buttery."
    price="$4.5"/> </NavLink></div>
      {/* <div className='Chocolatesflex'> */}
        <div><NavLink to='/Rubychocolate' className='nav5'>
     <Card
    title="Ruby Chocolate"
    image="https://media.istockphoto.com/id/1133431421/photo/broken-and-shattered-pieces-of-ruby-red-chocolate-in-a-round-charcoal-stone-ceramic-bowl.jpg?s=612x612&w=0&k=20&c=SzxQURDh4N3dTauE9tJFqPhI6dmFyCZCfrnUuSNLt3w="
    description="Naturally pink chocolate made from ruby cocoa beans, with a berry-like tartness."
    price="$8"/></NavLink></div>
    <div><NavLink to='/Bittersweetchocolate' className='nav5'>
     <Card
    title="Bittersweet Chocolate"
    image="https://media.istockphoto.com/id/1031570676/photo/chocolate-dark-bitter-chocolate-chunks-chocolate-background.jpg?s=612x612&w=0&k=20&c=U0P2QdQ_FX2LkeN3v_z1TIU4s8YOIQfF7JbFYluYMY8="
    description="High-cocoa dark chocolate (typically 70–85%), low sugar — intense flavor."
    price="$6"/></NavLink></div>
    <div><NavLink to='/Semisweetchocolate' className='nav5'>
     <Card
    title="Semisweet Chocolate"
    image="https://media.istockphoto.com/id/691811744/photo/chocolate.jpg?s=612x612&w=0&k=20&c=BFhcpG1XdrGdy9QIYxzjV5CEsetF9rqaB5u91oyQAfk="
    description="Slightly sweeter than bittersweet — common in chocolate chips and baking."
    price="$4"/> </NavLink></div>
      {/* <div className='Chocolatesflex'> */}
        <div><NavLink to='/Gianduja' className='nav5'>
     <Card
    title="Gianduja"
    image="https://media.istockphoto.com/id/1093643818/photo/sweet-nougat-pralines.jpg?s=612x612&w=0&k=20&c=BAfKXg7xZajOfBrMbjTUpreDRu2us-7GH4Qd07bE2Yk="
    description="Smooth blend of chocolate and hazelnut paste — creamy, nutty, originally from Italy."
    price="$7"/></NavLink></div>
    <div><NavLink to='/Filledchocolate' className='nav5'>
     <Card
    title="Filled Chocolate"
    image="https://media.istockphoto.com/id/1182505978/photo/sweet-confectionery-and-candy-indulgence-concept-theme-with-close-up-on-a-bitten-cherry.jpg?s=612x612&w=0&k=20&c=N9cIupLbXOvc-aUwEzGMWb_WZFLTXEaEkKgCo4L_-JA="
    description="	Chocolate shells filled with caramel, fruit creams, liqueurs, or nuts — often boxed."
    price="$6"/></NavLink></div>
    <div><NavLink to='/Flavoredchocolate' className='nav5'>
     <Card
    title="Flavored Chocolate"
    image="https://media.istockphoto.com/id/2061731379/photo/chocolate-bar-with-grapefruit-spices-are-sprinkled-on-the-surface-grapefruit-citron-and.jpg?s=612x612&w=0&k=20&c=8W7OU1aevLTITdXxQN2uAkik5gG2gfHb3Y4y_6sbwVI="
    description="Chocolate infused with added flavors like mint, chili, orange zest, or sea salt."
    price="$5"/> </NavLink></div>
      {/* <div className='Chocolatesflex'> */}
        <div><NavLink to='/Rawchocolate' className='nav5'>
     <Card
    title="Raw Chocolate"
    image="https://media.istockphoto.com/id/879326856/photo/cocoa-and-cinnamon-composition.jpg?s=612x612&w=0&k=20&c=FthBixuw9ASxBEcglDCsiQYRMcRISE_GQOIN4UIb628="
    description="	Minimally processed and often organic — strong, earthy, slightly gritty."
    price="$6"/></NavLink></div>
    <div><NavLink to='/Veganchocolate' className='nav5'>
     <Card
    title="Vegan Chocolate"
    image="https://media.istockphoto.com/id/612408302/photo/vegan-sweet-balls-food-on-table.jpg?s=612x612&w=0&k=20&c=4A1bpM0CfvrzdHyGPao6nAtodbroKC7dp3n3o-3b_Zs="
    description="Dairy-free chocolate, often dark or made with oat, almond, or coconut milk."
    price="$5.5"/></NavLink></div></div>
    </div>
<Footer/>
    </>
  )
}

export default Chocolates
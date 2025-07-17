import React from 'react'
import Card from './Card'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import './Smoothies.css'
import Footer from './Footer'

const Smoothies = () => {
  return (
    <>
    <div id="Smoothiesbody">
        <Navbar/>
        <div className='Smoothiesflex'>
            <div>
                <NavLink to='/Strawberrybliss' className='smoothiesnav'>
                <Card
                 title="Strawberry Bliss  "
                 image="https://media.istockphoto.com/id/1947306495/photo/strawberry-smoothie-or-milkshake-on-white.jpg?s=612x612&w=0&k=20&c=tEohVqELYpLfFI8TKo-27qkOM9OesFIKX66axlfDxbU="
                 description="Sweet, ripe strawberries blended to perfection"
                 price="$4.99"/>
                </NavLink>
            </div>
            <div>
                <NavLink to='/Mangomagic' className='smoothiesnav'>
                <Card
                 title="Mango Magic  "
                 image="https://media.istockphoto.com/id/1492527004/photo/fresh-yellow-mango-smoothie-in-glasses-with-straw-fresh-fruits-and-mint-summer-tropical-drink.jpg?s=612x612&w=0&k=20&c=jh8sg-qvf2TIUgVXPvzpPS1etF8mPecQGG9AbThF9VU="
                 description="Tropical mangoes whipped into a creamy delight"
                 price="$5.49"/>
                </NavLink>
            </div>
            <div>
                <NavLink to='/Berryblast' className='smoothiesnav'>
                <Card
                 title="Berry Blast "
                 image="https://media.istockphoto.com/id/1301158579/photo/fresh-cold-strawberry-smoothie-in-a-tall-glass.jpg?s=612x612&w=0&k=20&c=DLnuvmgNaegEXLKMnOFpEtmksiJRDeKk3zVwCymdoso="
                 description="A bold mix of strawberries, blueberries, and raspberries"
                 price="$5.99"/>
                </NavLink>
            </div>
        {/* </div> */}
         {/* <div className='Smoothiesflex'> */}
            <div>
                <NavLink to='/Tropicalparadise' className='smoothiesnav'>
                <Card
                 title="Tropical Paradise  "
                 image="https://media.istockphoto.com/id/479159075/photo/fresh-organic-yellow-smoothie-with-banana-apple-mango-pineapple.jpg?s=612x612&w=0&k=20&c=LXg1iZhZmwIDf3aAQ7TKaEG9LzCExu4MKEaoVdLah0w="
                 description="Pineapple, mango, and banana for a sunny island vibe"
                 price="$5.99"/>
                </NavLink>
            </div>
            <div>
                <NavLink to='/Greenglow' className='smoothiesnav'>
                <Card
                 title="Green Glow  "
                 image="https://media.istockphoto.com/id/481564166/photo/green-smoothie-with-fruits-and-vegetables-on-wooden-background.jpg?s=612x612&w=0&k=20&c=_6wyBX7etHdlYSKn2kzNVbRNDOTR9v-TqhcCOAGeYog="
                 description="Spinach, apple, banana, and kiwi for a healthy, energizing boost"
                 price="$6.49"/>
                </NavLink>
            </div>
            <div>
                <NavLink to='/Peachperfect' className='smoothiesnav'>
                <Card
                 title="Peach Perfect  "
                 image="https://media.istockphoto.com/id/859251042/photo/berry-smoothies-of-apricot-peach-and-banana-in-glasses-and-ingredients-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=0l7Gmawn8eY-gqM9BojGA6UBSrcnlKl99PVCAg4iUEA="
                 description="Juicy peaches with a hint of honey"
                 price="$4.99"/>
                </NavLink>
            </div>
        {/* </div> */}
         {/* <div className='Smoothiesflex'> */}
            <div>
                <NavLink to='/Bananaberry' className='smoothiesnav'>
                <Card
                 title="Banana Berry  "
                 image="https://media.istockphoto.com/id/1406579870/photo/blueberry-and-banana-smoothie-or-milkshake-in-a-glass-with-straw-fresh-berries-and-mint-on.jpg?s=612x612&w=0&k=20&c=BmCOLT8Ku3FsK-Cp2pDnd0noafNd97yRmzzxMQ3JZbo="
                 description="Creamy bananas blended with mixed berries"
                 price="$5.49"/>
                </NavLink>
            </div>
            <div>
                <NavLink to='/Papayapassion' className='smoothiesnav'>
                <Card
                 title="Papaya Passion  "
                 image="https://media.istockphoto.com/id/1967534483/photo/delicious-papaya-milk-smoothie-in-glass-cup-on-gray-table-background.jpg?s=612x612&w=0&k=20&c=KDJEyh6MNZHkhgVo7TWCRm9FYbcwT4NcPHxIAtoiLYs="
                 description=" Smooth papaya mixed with banana and a splash of orange"
                 price="$5.29"/>
                </NavLink>
            </div>
            <div>
                <NavLink to='/Avocadosmoothie' className='smoothiesnav'>
                <Card
                 title="Avocado Smoothie  "
                 image="https://media.istockphoto.com/id/512354958/photo/avocado-and-spinach-smoothie.jpg?s=612x612&w=0&k=20&c=YOTn8fTsXk0x3ZtOBpWSTdH3zfm3PNPgGEhUj1HlJGE="
                 description="Creamy avocado with honey and milk for a nutrient-rich boost"
                 price="$5.99"/>
                </NavLink>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Smoothies
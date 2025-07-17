import React from 'react'
import Navbar from './Navbar'
// import NavLink from 'react-router-dom'
import { useState } from 'react'
import Footer from './Footer'
import './Info.css'
import { useContext } from 'react'
import { CartContext } from './Cartcontext'

const Info = (props) => {

   const { addToCart } = useContext(CartContext);
  
    const handleAddToCart = () => {
      const item = {
        id: Date.now() + Math.random(),
        name: props.title,
        price: props.price,
        image: props.image
      };
      addToCart(item);
    };

const[showParagraph, setshowParagraph]=useState("")

// const description="{props.description}";
// const ingredients="{props.ingredients}";
const review="https://cdn-icons-png.flaticon.com/128/10801/10801392.png"

const renderContent=()=>{
  switch(showParagraph){
    case 'description':
      return<p className='setdata'>{props.description}</p>;
      case 'ingredients':
        return<p className='setdata'>{props.ingredients}</p>;
        case 'reviews':
          return<img className='setimg' src={review}/>;
  }
}

  return (
    <>
    <div className='gap'>
    <Navbar/>
    <div className='Infodiv'>
<div className='overflow'>
<img className='Infoimg' src={props.img}></img>
</div>
<div>
 <h1 className='Infohead'>{props.title}</h1>
 <p className='Infoprice'>{props.price}</p>
 <div className='dataflex'>
  <div id="descrip"> <button onClick={()=> setshowParagraph('description')} style={{ fontWeight: showParagraph==='description'? 'bold':'normal'}}>DESCRIPTION</button>
  </div>
  <div id="ingre"><button onClick={()=>setshowParagraph('ingredients')} style={{ fontWeight: showParagraph==='ingredients'? 'bold':'normal'}}>INGREDIENTS</button></div>
  <div id="review"><button onClick={()=>setshowParagraph('reviews')} style={{ fontWeight: showParagraph==='reviews'? 'bold':'normal'}}>REVIEWS</button></div>
 </div>
{renderContent()}

 <button onClick={handleAddToCart} className='Infobutton'>ADD TO CART</button>

</div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Info
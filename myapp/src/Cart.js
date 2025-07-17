import React from 'react';
import { CartContext } from './Cartcontext'
import { useContext } from 'react'
import Navbar from './Navbar';
import './Cart.css'
import empty from './assets/empty.png'
import Footer from './Footer';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <>
    <div id="cartbody">
        <Navbar/>
        <div>
      <h1 id="Carthead">Your Cart</h1>
      {cartItems.length === 0 ? (
        <>
        <img className='cartimg' src={empty}/>
        <p className="pcart">Cart is empty ☹ !</p>
        </>
      ) : (
        cartItems.map((item, index) => (
          <div key={index}>
            <img src={item.img}  width="50" />
            <p className='pcartt'>{item.name} - {item.price}</p>
            <button onClick={() => removeFromCart(item.id)} className='cartbutton
            '>Remove</button>
          </div>
        ))
      )}
    </div>
    </div>
    <Footer/>
    </>
  );
};


export default Cart
import React from 'react'
import "./Card.css"
import { useContext } from 'react'
import { CartContext } from './Cartcontext'

const Card = (props) => {
  return (
    <>
    <div className="card" data-aos="fade-up" >
  <img src={props.image} className="card-img-top cardimg" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}
      </p>
      <p className='price'>
    {props.price}
    </p>
  </div>
</div>

    </>
  )
}

export default Card
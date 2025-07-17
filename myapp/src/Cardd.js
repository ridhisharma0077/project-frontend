import React from 'react'
import {NavLink} from 'react-router-dom'
import './Cardd.css'

const Card = (props) => {
  return (
    <>
    <div className="card1" >
  <img src={props.image} alt={props.title}className="card-img " />
  <div className="card-body1">
    <h5 className="card-title1" >{props.title}</h5>
    <p className="card-text1">{props.description}
      </p>
    <p className='pstyle'>
    {props.price}
    </p>
  </div>
</div>

    </>
  )
}

export default Card
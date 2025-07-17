import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import './Freshjuices.css'
import Footer from './Footer'
import Card from './Card'

const Freshjuices = () => {
  return (
    <>
    <div id="Freshjuicesbody">
        <Navbar/>
        <div className='Freshjuicesflex'>
            <div>
            <NavLink to='/Orangezest' className='freshjuicesnav'>
            <Card
            title="Orange Zest  "
            image="https://media.istockphoto.com/id/154902327/photo/orange-juice.jpg?s=612x612&w=0&k=20&c=dF-ELkCAKxiGVS0KCpdODRpWth2nEj1THjkZfMX4X2Y="
            description="Freshly squeezed oranges bursting with citrusy goodness"
            price="$3.99"/>
            </NavLink></div>
              <div>
            <NavLink to='/Appleelixir' className='freshjuicesnav'>
            <Card
            title="Apple Elixir "
            image="https://media.istockphoto.com/id/186567313/photo/glass-of-apple-cider-surrounded-by-freshly-cut-apples.jpg?s=612x612&w=0&k=20&c=WzEIoI_LU2xLM753Zm4ihNOYij0OHG2185eOpTJwRTw="
            description="Crisp, cold-pressed apples for a naturally sweet refreshment "
            price="$4.49"/>
            </NavLink></div>
              <div>
            <NavLink to='/Carrotkick' className='freshjuicesnav'>
            <Card
            title="Carrot Kick  "
            image="https://media.istockphoto.com/id/511582856/photo/healthy-carrot-juice.jpg?s=612x612&w=0&k=20&c=hGNm1qO0PJ0nkTF4xRCZZEIcyPagxCziTawj6XV61Nw="
            description="Vibrant carrot juice packed with nutrients and flavor"
            price="$4.29"/>
            </NavLink></div>
        {/* </div> */}
         {/* <div className='Freshjuicesflex'> */}
            <div>
            <NavLink to='/Beetboost' className='freshjuicesnav'>
            <Card
            title="Beet Boost  "
            image="https://media.istockphoto.com/id/1178095232/photo/beetroot-juice.jpg?s=612x612&w=0&k=20&c=GJeOJqyjqqmcgwK1I1QJxpGA0JggRLoG7iTcnK7pcs0="
            description="Earthy and energizing beetroot juice with a hint of lemon"
            price="$4.99"/>
            </NavLink></div>
              <div>
            <NavLink to='/Watermelonwave' className='freshjuicesnav'>
            <Card
            title="Watermelon Wave  "
            image="https://media.istockphoto.com/id/471973052/photo/watermelon-juice.jpg?s=612x612&w=0&k=20&c=VPOJq8lUXln7YDWz1o_8HA4GJKzbuKd7FQj93OFcdx8="
            description="Juicy watermelon blended into a cool summer sip"
            price="$3.99"/>
            </NavLink></div>
              <div>
            <NavLink to='/Pineapplepunch' className='freshjuicesnav'>
            <Card
            title="Pineapple Punch "
            image="https://media.istockphoto.com/id/1158164118/photo/sliced-pineapple-kept-on-a-wooden-table-besides-a-glass-filled-with-pineapple-juice-and-a.jpg?s=612x612&w=0&k=20&c=RwX5-xBjOU5SP8pQCH_GUQtxp2qONEw6KhJaJci7DTo="
            description="Sweet and tangy pineapple juice with a tropical twist"
            price="$4.49"/>
            </NavLink></div>
        {/* </div> */}
         {/* <div className='Freshjuicesflex'> */}
            <div>
            <NavLink to='/Grapejuice' className='freshjuicesnav'>
            <Card
            title="Grape Juice "
            image="https://media.istockphoto.com/id/459366433/photo/a-glass-of-icy-red-grape-juice.jpg?s=612x612&w=0&k=20&c=5loR31L-6t26Zpk-mTpEjcT8fSSnUAch1YC-KRhm2uE="
            description="Sweet and refreshing juice made from freshly crushed grapes "
            price="$4.49"/>
            </NavLink></div>
              <div>
            <NavLink to='/Guavajuice' className='freshjuicesnav'>
            <Card
            title="Guava Juice "
            image="https://media.istockphoto.com/id/1224636110/photo/delicious-red-guava-juice-alongside-a-slice-of-guava-in-the-background-guavas-and-leaves-on.jpg?s=612x612&w=0&k=20&c=meGXKR4pe2HbWQq1dgZENsePud9YLIwPmZINKMFTALg="
            description="Tropical guava flavor with a hint of lime "
            price="$4.99"/>
            </NavLink></div>
              <div>
            <NavLink to='/Kiwijuice' className='freshjuicesnav'>
            <Card
            title="Kiwi Juice"
            image="https://media.istockphoto.com/id/520294937/photo/glass-of-kiwi-juice-with-fresh-fruits.jpg?s=612x612&w=0&k=20&c=CHVGWywCgHPMjxC6AOF3bT6HyKKLVSxXMplTD6Zq_3U="
            description="Tart and tangy juice made from fresh green kiwi "
            price="$4.99"/>
            </NavLink></div>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Freshjuices
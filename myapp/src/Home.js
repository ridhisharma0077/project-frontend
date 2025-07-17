import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import {NavLink} from 'react-router-dom'
import Footer from './Footer'
import Cardd from './Cardd'
import image from "./assets/bakeryy.png"
import commas from './assets/commas.png'

const Home = () => {
  return (
    <>
    {/* <NavLink to="/"><img id="logo"src={image}></img></NavLink>  */}
   
    <NavLink className="name"to="/"><h1 id="h1">Sugar & Sip</h1></NavLink>
    <div id="body">
   <Navbar></Navbar>
   <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
     <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={3}
      aria-label="Slide 4"
    />
     <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={4}
      aria-label="Slide 5"
    />
  </div>
  <div className="carousel-inner image">
    <div className="carousel-item active image1">
      <NavLink to="/Macarons">
      <img id="imge1"src="https://media.istockphoto.com/id/1015455126/photo/small-heart-cookies-on-cooling-rack.jpg?s=612x612&w=0&k=20&c=68b3DF1jagCjz9VdB9nGwSxQffFrILC-_v7l5r2FRRM=" alt="..." />
      <img id="imge2"src="https://media.istockphoto.com/id/1332712554/photo/macaroons-on-plate-with-flowers.jpg?s=612x612&w=0&k=20&c=BY-2Wd_C4P3PiGZY-NrIXvzbRUiLWuLjo-Q8T7v3Ve4="></img></NavLink>
      <div className="carousel-caption d-none d-md-block">
        <p className="p1">Treat yourself or someone special with our adorable different shapes cookies- baked with ❤️ </p>
    </div>
    </div>
    <div className="carousel-item image1">
      <NavLink to ="/Pastries">
      <img id="imge1"src="https://media.istockphoto.com/id/2206411433/photo/delicious-croissants-delicately-topped-with-fresh-strawberries-and-cream.jpg?s=612x612&w=0&k=20&c=bf7CBl2Z19NRcPAybU8CXdv95vCgBj5ibUbqASiS3q8=" alt="...."/>
      <img id="imge2"src="https://media.istockphoto.com/id/160408939/photo/two-strawberry-cake.jpg?s=612x612&w=0&k=20&c=6JGJXbYztOxr4MgIVUXyGRcwRQSP7wy3cga68l7XmmE="></img>
      </NavLink>
      <div className="carousel-caption d-none d-md-block ">
        <p className="p1">Sweeten Your Day with Delicious Pastries 😋</p>
      </div>
    </div>
    <div className="carousel-item image1">
      <NavLink to="/Beverages">
      <img id="imge1"src="https://media.istockphoto.com/id/803432376/photo/homemade-spicy-hot-chocolate-with-cinnamon.jpg?s=612x612&w=0&k=20&c=pXl1-IfBSnw1rzQRfx_cXmu1mjF32B-hT0LUfEGMnsA="alt="..." />
      <img id="imge2"src="https://media.istockphoto.com/id/1324007808/photo/dalgona-coffee-with-coffee-beans-on-table.jpg?s=612x612&w=0&k=20&c=rMYdqfDabwczSHdceHnrCNwawEhTQy4N7hPqzJErl5c="></img>
      </NavLink>
      <div className="carousel-caption d-none d-md-block">
        <p className="p1">Sip on happiness with our refreshing range of beverages- from Coffee and tea to Milkshakes and Mojitos🍸</p>
      </div>
    </div>
    <div className="carousel-item image1">
      <NavLink to="/Chocolates">
      <img id="imge1"src="https://media.istockphoto.com/id/1141560948/photo/various-chocolate-pralines.jpg?s=612x612&w=0&k=20&c=kj7qEPwoEGwtrCG75WXmZ1VZkZt-cMvTQ6iA-GoO6pI="alt="..." />
      <img id="imge2"src="https://media.istockphoto.com/id/1558134527/photo/milk-chocolate-bars-and-candies-on-a-dark-background.jpg?s=612x612&w=0&k=20&c=rQqjbj88PHMcilM4dqR-aepnJfuUX5KviE0U9vMtomA="></img>
      </NavLink>
      <div className="carousel-caption d-none d-md-block">
        <p className="p1">Chocolate: A little piece of heaven🍫</p>
      </div>
    </div>
    <div className="carousel-item image1">
      <NavLink to="/Donuts">
      <img  id="imge1" src="https://media.istockphoto.com/id/674139928/photo/donuts-close-up.jpg?s=612x612&w=0&k=20&c=sA0YobyQhp7wj-y29zo_n8MOh2vxjy2zMY-tScqX-Nw="alt="..." />
      <img  id="imge2" src="https://media.istockphoto.com/id/686623972/photo/preparing-homemade-donuts.jpg?s=612x612&w=0&k=20&c=uTBMKwB26mPgptOIEEZqRbwd8K2bBogEBTgqCDrj5c0="></img>
      </NavLink>
      <div className="carousel-caption d-none d-md-block">
        <p className="p1">Life is better with a sprinkle of Donut 🍩</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<h1 id="heading11" data-aos="fade-up">We are</h1>
<h1 id="heading12" data-aos="fade-up">Sugar & Sip</h1> 

<div class="image-container" data-aos="slide-up">
  <NavLink to="/Cakes">
  <img src="https://media.istockphoto.com/id/965443768/photo/blueberry-cheese-cake.jpg?s=612x612&w=0&k=20&c=yZZfN0nZU2NOBtr9knDE5jS24KmQDbttxa_FbIjVE6w=" class="main-image1" /></NavLink>
  <NavLink to="/Donuts">
  <img src="https://media.istockphoto.com/id/962046246/photo/piled-up-donuts.jpg?s=612x612&w=0&k=20&c=TjZBlqhP1RJJ-NBh3H7ztb3_Rrm3Zq0wcm6v54aU9O0=" class="main-image2" /></NavLink>
  <NavLink to="/Milkshakes">
  <img src="https://media.istockphoto.com/id/2175042038/photo/strawberry-milkshake-with-ice-cream-and-whipped-cream-served-in-jar-isolated-on-wooden-board.jpg?s=612x612&w=0&k=20&c=sevtNLSK2QB1-hqM6RaWS5ORWRtJZvXLHI4QpxSHt7E=" class="main-image3" /></NavLink>
  <NavLink to="/Pastries">
  <img src="https://media.istockphoto.com/id/626610540/photo/cinnamon-rolls-with-cocoa.jpg?s=612x612&w=0&k=20&c=rke-b7tSiSM3l9w87JABonZjjgVOLZ6nEwGhml7LxA8=" class="main-image4" /></NavLink>
</div>

<div id="bakery" data-aos="fade-up">
      <h2 className="shophead">Food of  The Gods, Freshly Baked! </h2>
      <p className="shopp">Since 2004, we've been serving our guests the best quality treats, traditionally made and presented with care.</p>
    </div>
    <div className='Flex' data-aos="fade-up">
      <div>
        <div>
        <h4 className="Flexh">AUTHENTIC RECIPES</h4>
        <p className='Flexp'>Our products are based on
traditional home-style recipes
using fresh ingredients.</p></div>
        <div>
        <h4 className="Flexh">BAKED WITH LOVE</h4>
        <p className="Flexp">Our passion for baking is poured into
every recipe, serving smiles on a
plate everyday.</p></div>
</div>
<div data-aos="fade-up">
  <img src={image} className='Shop'/>
</div>
      <div>
        <div>
        <h4 className="Flexh">COMMITTED TO QUALITY</h4>
        <p className="Flexp">From our ingredients to our
kitchen operations & guest services,
we always prioritize quality.</p></div>
        <div>
        <h4 className="Flexh">HONESTLY PRICED</h4>
        <p className="Flexp">We constantly strive to offer the best
        products at the right prices.</p></div>
    </div>
</div>
<h5 id="taste" data-aos="fade-up">Taste</h5>
<h2 id="our" data-aos="fade-up">OUR BEST SELLERS</h2>
<div id="cards6" data-aos="fade-up">
    <div>
  <NavLink to="/Cakes"  style={{textDecoration: "none"}}>
  <Cardd
  image="https://media.istockphoto.com/id/1133005578/photo/close-up-image-of-red-velvet-cake-layered-sponge-slices-photo-with-butter-icing-cream.jpg?s=612x612&w=0&k=20&c=hTQ4vrq8LHKHxJUlJV4ZlNyICkoxuRNWxGRiXj5huPA="
  title="Red Velvet Cake"
  price="$25"/></NavLink>
  </div>
  <div>
    <NavLink to="/Chocolates" style={{textDecoration: "none"}}>
   <Cardd 
  image="https://media.istockphoto.com/id/1085168846/photo/broken-and-shattered-pieces-of-ruby-red-chocolate-in-a-round-charcoal-stone-ceramic-bowl.jpg?s=612x612&w=0&k=20&c=qGTtE2G6lteABtN2dgUHqyp3znDLxcdzBczOCrZXHoc="
  title="Ruby Chocolate"
  price="$8"/>
  </NavLink></div>
  <div>
    <NavLink to="/Donuts" style={{textDecoration: "none"}}>
   <Cardd 
  image="https://media.istockphoto.com/id/1137451858/photo/donut-on-white-background.jpg?s=612x612&w=0&k=20&c=N17XuMYCWxEi4rgsJpHYrZXbUopt422lKKVp9FdE9I8="
  title="Sprinkled Donut"
  price="$2.5"/></NavLink></div>
    <div>
      <NavLink to="/Chocolates" style={{textDecoration: "none"}}>
   <Cardd 
  image="https://media.istockphoto.com/id/1961142003/photo/hazelnut-chocolate-truffles.jpg?s=612x612&w=0&k=20&c=G9_cRW0OB4GridnxxiXiJIvUIW_KeRwmqi29f3OHIFw="
  title="Vegan Chocolate"
  price="$5.5"/></NavLink></div>
<div>
  <NavLink to="/Pastries" style={{textDecoration: "none"}}>
  <Cardd 
  image="https://media.istockphoto.com/id/1377897503/photo/kur%C4%ABmu-pan.jpg?s=612x612&w=0&k=20&c=uensRMompCmj0tQyuF1MEXhbUudxLIA-DyO3G4V0-d8="
  title="Custard Bun"
  price="$4"/>
  </NavLink></div>
  <div>
    <NavLink to="/Macarons" style={{textDecoration: "none"}}>
   <Cardd 
  image="https://media.istockphoto.com/id/2200852288/photo/green-pistachio-macaroons-stacked-in-coffee-cups-close-up-shot.jpg?s=612x612&w=0&k=20&c=TIfqJPLXv4J1VGWBAU5kWsMGSQZIemGanC55Mcm1P4o="
  title="Pistachio Macaron"
  price="$3"/>
  </NavLink>
  </div>
  </div>
  
  <h5 id="taste" data-aos="fade-up">For every</h5>
<h2 id="our" data-aos="fade-up">OCCASIONS</h2>
<div className='imgdiv' >
  <div>
  <div >
    <img id="wedding"src="https://media.istockphoto.com/id/484504552/photo/3-tiered-white-wedding-cake.jpg?s=612x612&w=0&k=20&c=W7mGVE3g1O8dKDFI2CJMYm1E3B70i0PaMYDLf1hfCpY=">
    </img>
    <h1 className="imgdiv1">W E D D I N G S</h1><br/>
<img id="breakfast"src="https://media.istockphoto.com/id/960924058/photo/cup-of-cappuccino-coffee-with-croissants.jpg?s=612x612&w=0&k=20&c=mGeJTwQ2OOPdTRZgsBsCq6KxrGSLKjwW_pETwyVl9fM="></img>
<h1 className='imgdiv2' >B R E A K F A S T</h1>
  </div>
  </div>
  <div>
    <img id="birthdays"src="https://images.unsplash.com/photo-1595261072825-e41bf12ea0b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJpcnRoZGF5JTIwY2FrZXN8ZW58MHx8MHx8fDA%3D"></img>
    <h1 className='imgdiv3'>B I R T H D A Y S</h1>
  </div>
  {/* </div> */}
</div>
<div id="feedback" data-aos="zoom-in">
<h2 id="test">Testimonials</h2>
<img id="testicon"src={commas}></img>

<div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner testcarousel">
    <div className="carousel-item active">
      <p className='testp'>Always a delight coming here for pastries. This outlet may not be spacious but their pastries are lip smacking good. Loved Mille-feuille pastry among the ones i tried.</p>
      <h5 className='testh'>Shrisha Toor, Shimla</h5>
    </div>
    <div className="carousel-item">
      <p className='testp'>Sugar & Sip is a outlet which will always top our priority list. Cheesecake that melt in your mouth leaving you a heavenly sensation</p>
      <h5 className='testh'>Neha Sharma, Pune</h5>
    </div>
    <div className="carousel-item">
    <p className='testp'>I love all their products but their hot chocolate has been my all-time favourite and truly justifies its name with its rich chocolate gooeyness. Sugar & Slice is one of our favourite places</p>
    <h5 className='testh'>Bhavna Sharma, Mumbai</h5>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div></div>

</div>
<Footer/>
    </>
  );
}

export default Home;
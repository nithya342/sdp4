import React from "react"
import Navbar from "./Navbar";

function Header() 
{
     return (
     <div id='main'>
         <Navbar/>
         <div className="name">
             <h1><span>Launch your product</span> with our help and planning</h1>
             <p className='details'>Get idea of planning and strategies with us where your sales will blow up</p>
             <a href='#' className='cv-btn'>Explore</a>
         
         </div>
     </div>
     )
}

export default Header;
import React from 'react';
import Header from "../Components/Header";
import Feature from "../Components/Feature";
import About from "../Components/About";
import Presentation from "../Components/Presentation";
import aboutimage from "../images/about.png";
import aboutimage1 from "../images/download.png";
import Contact from "../Components/Contact";
function Home()
{
    return(
        <div>
            <Header/>
            <Feature/>
            <About image={aboutimage} title='c 4th flr buddies' button='Get planned'/>
            <Presentation/>
            <About image={aboutimage1} title='c 4th flr buddies' button='Get planned'/>      
        <Contact/>
        </div>
        
    )
}

export default Home
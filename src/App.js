import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import Presentation from "./Components/Presentation";
import aboutimage from "./images/about.png";
import aboutimage1 from "./images/download.png";
import Contact from "./Components/Contact";
import { Routes,Route} from 'react-router-dom';
import Demo from "./Components/Demo";
import Home from "./Components/Home";
function App() {
  return (

    <div className="App">
      <Routes>
        <Route path='/features' element={<Demo/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        </Routes>
      
      
      {/*<Header/>
      <Feature/>
      <About image={aboutimage} title='c 4th flr buddies' button='Get planned'/>
      <Presentation/>
      <About image={aboutimage1} title='c 4th flr buddies' button='Get planned'/>      
  <Contact/>*/}
      
    </div>
  );
}

export default App;

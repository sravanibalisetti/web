import React from 'react';
import teddy from './teddy.jpg';
import teddy1 from './teddy1.jpg';
import Sidebar from './Sidebar';
 import Header from './Header';
 import logo from './logo.png';
function About() {

  return (
	<>
	     <Header/> 
      <Sidebar/>
      <footer className="footer">
            <img  class="icon" src={logo} alt="imag" height="100" width="150px" />
      </footer>
    <div>
       <img  class="tedy" src={teddy} alt="imag"/> 
	   <img  class="tedy1" src={teddy1} alt="imag"/>  
    </div>
	</>
  )
}
export default About;


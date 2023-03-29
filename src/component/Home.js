import React from 'react'
import flower2 from './flower2.png';
import paris from './paris.jpg';
import Sidebar from './Sidebar';
 import Header from './Header';
 import logo from './logo.png';
import './home.css'
function Home() {

return (
  <>
     <Header/> 
      <Sidebar/>
      <footer className="footer">
            <img  class="icon" src={logo} alt="imag" height="100" width="150px" />
      </footer>
  <div  className="flow1">
    <img src={paris} alt="imag" />
    <div className="text-block">
    <h4>Paris</h4>
    <p>"The city of light"</p>
  </div>
</div>
  
    <div>
      <img class="flow" src={flower2} alt="imag"/>
      <div className="text">
    <h4> Flower</h4>
    <p>"Flowers don't tell,they show..."</p> 
  </div>
      </div>
      </>
        
  )
}
export default Home 

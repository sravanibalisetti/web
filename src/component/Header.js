import React from 'react'
import { FaUserCircle} from "react-icons/fa";
 function Header() {
  return (
    <div>
    <header className="header"> 
            <div className='profile'>
            <h2> <FaUserCircle size="1.5rem" color='blue' /></h2>
            </div>
            <center className='task' >
              <h4> MIRACLE SOFTWARE SYSTEMS</h4>
             </center>
  </header>
  </div>
  )
}
export default Header;



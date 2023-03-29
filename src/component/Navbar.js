import React from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <ul>
        <li> HOME</li>
        <li> SERVICES </li>
      </ul>
    <Link to="/home"><h4>Home</h4></Link>
      <Link to="/services"><h4> SERVICES</h4></Link>
    </div>
  )
}

export default Navbar
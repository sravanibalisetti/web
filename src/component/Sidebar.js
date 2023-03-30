
import React from 'react'
import {Link} from 'react-router-dom';
function Sidebar() {
  return (
    <div>
    <aside className="sidebar">
<ul>
    <Link to="/home"><li> HOME </li></Link> 
<Link to="/about"> <li> About</li></Link> 
</ul>
    </aside>
  </div>
  )
}
export default Sidebar
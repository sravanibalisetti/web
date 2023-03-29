import React from 'react';
import './App.css'; 
import Login from './component/Login';
import Home from './component/Home';
import About from './component/About';
import {BrowserRouter,Route,Routes,Link}  from 'react-router-dom';
function App() {
  return (


    <div className="app">
     {/* <Login/> */}
       <BrowserRouter>
    
      <Link to="/"/>
      <Routes>
       <Route path='/' element={<Login/>} />   
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;


// import React, { useState } from 'react'

// function App() {
//   const[count,setCount]=useState(2)
//   const[name,setName]=useState("sravani")
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>change</button>
//       < button onChange={()=>setName("sraves")}>change </button>
//     </div>
//   )
// }

// export default App











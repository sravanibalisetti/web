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
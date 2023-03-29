import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { RiLoginCircleFill } from "react-icons/ri";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { FaUserCircle} from "react-icons/fa";
import { AiTwotoneLock } from "react-icons/ai";
import { useNavigate} from 'react-router-dom';
const Login=()=> {
    const nav=useNavigate();
    const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const submitButton=()=>{ 
nav("/Home")
}
  return (
    <>
    <div className='loginBackground'>
    <div className='loginCard'>
      <center>
        <form>
     <Card className="image1" >
        <div className='mi'>
        <h3><strong>MIRACLE</strong></h3>
        </div>
        <div className='ss'>
              <h4>software systems</h4>
        </div>
      
    <Card.Header  className="loginCardHeader"> <strong><RiLoginCircleFill/>LogIn to your account</strong></Card.Header>
  <Card.Body>
       <Form>
    <center>
       <div className="emailLabel"  >
        <Form.Control type="email" name="email" value={email}  placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      <div className='ico'>
        < FaUserCircle size="1.5rem" color='black'/>
      </div>
      </div>
      <br></br>
      <div className="passwordLabel" >
        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <div className='icoo'>
        < AiTwotoneLock  size="1.5rem" />
      </div>
      </div>
      </center>
      <br></br>
      <button  className="loginbutton"  onClick={submitButton}>LogIn</button>
      </Form>
  </Card.Body>
</Card>
</form>
</center>
</div>
<div className='loginCard2'>

     <Card className="image2" >
</Card>

</div>
  </div>

  </>
  )
}

export default Login
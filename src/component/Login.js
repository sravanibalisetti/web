
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { FaUserCircle} from "react-icons/fa";
import { FaEyeSlash} from "react-icons/fa";
import { useNavigate} from 'react-router-dom';
import miracle26 from './miracle26.png';
const Login=()=> {
    const nav=useNavigate();
    const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[message,setMessage]=useState({})
const submitButton=()=>{ 
    if(email==undefined || email=='')  
    {  
   alert("enter the mail")
   }
       
else
nav("/Home")
}
const checkValidation =()=>{
    const regEx= /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/
   
    if(regEx.test(email)){
      alert("email is valid")
    }
    else if( email ===""){
        setMessage("please enter the email")
    }
    else if(!regEx.test(email)){
        setMessage("email is not valid")
    }
  
    if(test.password){
        test.password=  "Password Required"
    }
    else if( test.password.length<9){
        test.password= "password must be more than 5 char"
    }
  
  
  }
  return (
    <>
    <div className='loginBackground'>
    <div className='loginCard'>
      <center>
        <form>
     <Card className="image1" >
        <div className='mir'> 
        <img class="mira" src={miracle26} alt="imag"/>
        </div>
      
      
    <Card.Header  className="loginCardHeader"> LogIn to your account</Card.Header>
  <Card.Body>
       <Form>
    <center>
       <div className="emailLabel"  >
        <Form.Control type="email" name="email" value={email}  placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      <div className='ico'>
        < FaUserCircle size="1.5rem" />
      </div>
      </div>
      <br></br>
      <div className="passwordLabel" >
        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <div className='icoo'>
        <FaEyeSlash size="1.5rem" />
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
        <div className='con'>
            <h4>Welcome to </h4>
      
            <div className='con1'>
            <h5><strong>Miracle Software Systems</strong></h5>
            </div>
            <div className='con2'>
                <h4>Where everything is for <strong>you!</strong></h4></div>
            
                </div>
</Card>

</div>
  </div>

  </>
  )

}

export default Login
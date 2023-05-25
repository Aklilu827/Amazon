import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import"./Login.css"
import { auth } from './Firebase';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth';
function Login() {
  const [email,setEmail] = useState("");
  const [Password,setPassword] = useState("");
  const navigate =useNavigate();
  const signIn =(e)=>{   
    e.preventDefault(); 
    signInWithEmailAndPassword(auth,email,Password)
   .then((Credential)=>{
    if (Credential)
    navigate("/")
   })
    .catch((error)=>alert(error.message));
  }
  const register =(e)=>{
    e.preventDefault(); 
    createUserWithEmailAndPassword (auth,email,Password)
   .then((Credential)=>{
    if (Credential)
    navigate("/")
   })
   .catch((error)=>{
    const errorMessage= error.message
    alert(errorMessage)
   });
  }
  return (
    <div className='login'>
 <Link to="/">
<img 
className='login_logo'
src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
/>
</Link>
<div className='login__container'>
    <h1 className='sign'>Sign-in</h1>
    <form>
       <h5>E-mail</h5>
       <input className='num' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />

       <h5>Password</h5>

       <input className='num'  type="Password" value={Password} onChange={(e) =>setPassword(e.target.value)} />
       <button  type='Submit' onClick={signIn} className="login_button">Sign In</button>
    </form>
    <p className='signing'>
    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
    </p>
    <button onClick={register} className='Login_registerButton'>
        Create your amazon account
    </button>
</div>
    </div>
  )
}

export default Login
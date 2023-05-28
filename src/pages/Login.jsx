import React from 'react'
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate, } from 'react-router-dom'
import { auth } from '../firebase';

const Login = () => {

  //   const signOut = async ()=>{
  //     try {
  //      await signOut(auth).then(() => {
  //        Navigate('/login')
  //        // Sign-out successful.
  //      });

  //     } catch (err) {
  //       setErr(true);      
  //     }
  //  };


  const Navigate = useNavigate();
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Navigate("/")
      console.log("log in success")
    } catch (err) {
      setErr(err);
    }



  };






  return (
    <div className='formContainer'>

      <div className="formWrapper">
        <span className="logo">Let's Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Enter email' />
          <input type="password" placeholder='Enter password' />

          <button>Login</button>
          {err && <span>user not found! please enter proper gmail with password</span>}

        </form>
        <p> Don't have an account <Link to="/register">Register here!</Link></p>
        {/* <p>Don't have an account Register Here!</p> */}
      </div>
    </div>
  )
}

export default Login
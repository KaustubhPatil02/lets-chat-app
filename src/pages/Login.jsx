import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      console.log("Log in success");
    } catch (err) {
      setErr(true);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
      console.log("Google Sign-In successful");
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };


  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <span className="logo">Let's Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='Enter email' required />
          <input type="password" placeholder='Enter password' required />
          <button type="submit">Login</button>
          {err && <span className="errorMessage">User not found! Please enter a valid email and password.</span>}
        </form>
        <button onClick={handleGoogleSignIn}>Login with Google</button>
        <p> Don't have an account? <Link to="/register">Register here!</Link></p>
      </div>
    </div>
  );
}

export default Login;

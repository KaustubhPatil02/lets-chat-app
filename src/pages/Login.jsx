import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='formContainer'>
            
            <div className="formWrapper">
                <span className="logo">Let's Chat</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" placeholder='Enter email' />
                    <input type="text" placeholder='Enter password' />

                    <button>Login</button>
                </form>
                <p> Don't have an account <Link to="/register">Register here!</Link></p>
                {/* <p>Don't have an account Register Here!</p> */}
            </div>
        </div>
    )
}

export default Login
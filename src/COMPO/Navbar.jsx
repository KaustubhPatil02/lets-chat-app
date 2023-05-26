import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'> 
    <span className='logo'>Let's Chat</span>
    <div className="user">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="" />
        <span>Kaustubh</span>
        <button>Logout</button>
    </div>  
    </div>
  )
}

export default Navbar
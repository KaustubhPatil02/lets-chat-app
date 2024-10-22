import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  // Function to toggle sidebar visibility
  const handleHamburgerClick = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebar-collapsed');
  };

  return (
    <div className='navbar'>
      <GiHamburgerMenu className="hamburger-icon" onClick={handleHamburgerClick} />
      <span className='logo'>Let's Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

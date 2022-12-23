import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            Bibox
            <i className='fab fa-typo3' />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import React from 'react';

import "./Navbar.css"
const NavBar = () => {
    return (
        <header>
            <nav>
                <div className='navleft'>
                    <img src="/logo.png" alt="" />
                </div>
                <div className='navcenter'>
                    <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">News</a></li>
                    <li><a href="/">Contacts</a></li>
                    </ul>
                </div>
                <div className='navright'>
                  <button>Admin</button>  
                  <button>Get Started</button> 
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
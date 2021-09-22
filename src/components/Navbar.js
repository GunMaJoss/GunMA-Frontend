import React, { useState } from 'react'
import { Button} from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
//import {NavLink} from './images'

function Navbar() {
    const [click,setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        }else{
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 500) {
            setDropdown(false);
        }else{
            setDropdown(false);
        }
    };

    return (
        <>
        <nav className='navbar'>
            <nav to='/' className='navbar-logo'>

            <img src="logogunma2.png"></img>

            </nav>
            <div className = 'menu-icon' onClick = {handleClick}>
                <i className ={click ? 'fas fa-times' : 'fas fa-bars'}
                />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home 
                    </Link>
                </li>

                <li className='nav-item'
                onMouseEnter = {onMouseEnter}
                onMouseLeave = {onMouseLeave}
                >
                    <Link to='/fitur' className='nav-links' onClick={closeMobileMenu}>
                        Fitur <i className = 'fas fa-caret-down'/>
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>

                <li className='nav-item'>
                    <Link to='/bantuan' className='nav-links' onClick={closeMobileMenu}>
                        Bantuan
                    </Link>
                </li> 
            </ul>
            <Button/>
        </nav>
        </>
    );
}

export default Navbar;
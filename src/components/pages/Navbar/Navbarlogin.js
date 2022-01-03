import React, { useState, useEffect } from 'react'
import { Button } from '../../Button'
import { Link, useHistory } from 'react-router-dom'
import './Navbarlogin.css'
import Dropdown from '../../Dropdown'
import Dropdown2 from '../../Dropdown2'
//import {NavLink} from './images'
import Popup from "reactjs-popup";
import Login from '../Login'
import { login } from '../Navbar/auth'

function Navbarlogin() {
    const [click,setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [button, setButton] = useState(true);
    const history = useHistory()

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


    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);

      const _onLogout = () => {
        localStorage.removeItem("token");
         history.replace("/");
         window.location.reload();
       };

    return (
        <>
      <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
            <img src="images/logo5.png"></img>
    
            </Link>
            <div className = 'menu-icon' onClick = {handleClick}>
                <i className ={click ? 'fas fa-times' : 'fas fa-bars'}
                />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                       Find Internship
                    </Link>
                </li>

                <li className='nav-item'
                onMouseEnter = {onMouseEnter}
                onMouseLeave = {onMouseLeave}
                >
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Fitur <i className = 'fas fa-caret-down'/>
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>

                <li className='nav-item'>
                    <Link to='/app' className='nav-links' onClick={closeMobileMenu}>
                        Our App
                    </Link>
                </li>
               
                <li className='nav-item'>
                    <Link to='/bantuan' className='nav-links' onClick={closeMobileMenu}>
                        Help 
                    </Link>
                </li> 
            </ul>
            
           
            <li className='nav-item'
                onMouseEnter = {onMouseEnter}
                onMouseLeave = {onMouseLeave}>
               
               <Link className='nav-links' onClick={closeMobileMenu}>
               <i className = 'fas fa-user-circle' onClick={_onLogout}> Logout </i> 
               {/* <button className="btn-logout" onClick={_onLogout}></button> */}
                    </Link>
                    
                  {/* {<Dropdown2/>} */}
                   
                  </li>
                  
            {/* {check local storage, kalo == login? => passing component; 
            else signIn} 
            
            {checkSignIn() == 'login' ? <Popup/> : <ProfileBtn/>}

            */}
            
        </nav>
        </>
    );
}

export default Navbarlogin;
import React, { useState} from 'react';
import { MenuItems2 } from './MenuItems2';
import { Link,useHistory } from 'react-router-dom';
import './Dropdown.css';


function Dropdown2() {
    const [click, setClick] = useState(false)
    const history = useHistory()
    const handleClick = () => setClick(!click)
    const _onLogout = () => {
        localStorage.removeItem("token");
         history.replace("/");
         window.location.reload();
       };
       

    return (
    <>
    <ul onClick={handleClick}
    className= {click ? 'dropdown-menu clicked' : 'dropdown-menu'}>

        {MenuItems2.map((item,index) => {
            return (
                <li key={index}>
                    <Link className={item.cName} to={item.path} onClick={() =>setClick(false)}>

                    {item.title}
                </Link>
                </li>
            );
        })}
   <button className="btn-logout" onClick={_onLogout}>Logout</button>
    </ul>
    </>
);

}

export default Dropdown2;


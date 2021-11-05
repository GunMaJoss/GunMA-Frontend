import React, { useState } from 'react'
import Login from './Login';
import Popup from "reactjs-popup";

function Regis({close}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [setFlag] = useState(false);
    const [login, setLogin] = useState(true);


    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!email || !password) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            console.log("Saved in Local Storage");

            setLogin(!login)
        }
    }


    return ( 
        <> {
            Login ? <div> { login ? < form onSubmit = { handleFormSubmit } >
                <a className="close" href onClick={close}>
                &times;
                </a>
                <h3 > Register </h3> 
                <div className = "form-group" >
                <label > Mohon Diisi Semua </label> 
                </div> 
                <div className = "form-group" >
                <label > Email </label> 
                <input type = "email"
                className = "form-control"
                placeholder = "Enter email"
                onChange = {
                    (event) => setEmail(event.target.value) }
                /> 
                </div>
                <div className = "form-group" >
                <label > Password </label> 
                <input type = "password"
                className = "form-control"
                placeholder = "Enter password"
                onChange = {
                    (event) => setPassword(event.target.value) }
                /> 
                </div>
                <div>
                <button type = "submit"
                className = "btn btn-dark btn-lg btn-block" > Register </button> 
                </div>
                <div>
                <a>already Registered ?
                <Popup modal trigger={<u> Sign In</u>}>
                {close => <Regis close={close} />}
                </Popup>
                </a>
                </div>
                </form> : <Login />
            } 
            </div> : <div> 
            </div>
        } </>
    )
}

export default Regis
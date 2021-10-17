import React, { useState } from 'react'
import { Alert } from 'reactstrap';
import Admin from 'layouts/Admin';

function Login() {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);
    const [admin, setAdmin] = useState(true);


    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('Password').replace(/"/g, "");
        let mail = localStorage.getItem('Email').replace(/"/g, "");
        // .replace(/"/g,"") is used to remove the double quotes for the string

        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((passwordlog !== pass) || (emaillog !== mail)) {
            setFlag(true);
        } else {
            setAdmin(!Admin);
            setFlag(false);
        }
    }


    return ( <
        div > {
            admin ? < form onSubmit = { handleLogin } >
            <
            h3 > Login < /h3> <
            h1 > sss < /h1> <
            h1 > sss < /h1> <
            div className = "form-group" >
            <
            label > Email < /label> <
            input type = "email"
            className = "form-control"
            placeholder = "Enter email"
            onChange = {
                (event) => setEmaillog(event.target.value) }
            /> <
            /div>

            <
            div className = "form-group" >
            <
            label > Password < /label> <
            input type = "password"
            className = "form-control"
            placeholder = "Enter password"
            onChange = {
                (event) => setPasswordlog(event.target.value) }
            /> <
            /div>

            <
            button type = "submit"
            className = "btn btn-dark btn-lg btn-block" > Login < /button>

            {
                flag && < Alert color = 'primary'
                variant = "warning" >
                    Fill correct Info
                else keep trying. <
                    /Alert>} <
                    /form> : <Admin / >
            }

            <
            /div>
        )
    }

    export default Login
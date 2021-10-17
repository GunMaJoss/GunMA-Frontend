import React, { useState } from 'react'
import Login from '../examples/Login';

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);
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

    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }


    return ( <
        > {
            Login ? < div > {
                login ? < form onSubmit = { handleFormSubmit } >

                <
                h3 > Register < /h3> <
                h1 > sss < /h1> <
                h1 > sss < /h1> <
                div className = "form-group" >
                <
                label > Mohon Diisi Semua < /label> <
                /div> <
                div className = "form-group" >
                <
                label > Email < /label> <
                input type = "email"
                className = "form-control"
                placeholder = "Enter email"
                onChange = {
                    (event) => setEmail(event.target.value) }
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
                    (event) => setPassword(event.target.value) }
                /> <
                /div>

                <
                button type = "submit"
                className = "btn btn-dark btn-lg btn-block" > Register < /button> <
                p className = "forgot-password text-right" >
                Already registered < a href = "#"
                onClick = { handleClick } > login < /a> <
                /p>

                <
                /form> : <Login / >
            } <
            /div> : <div> <
            /div>
        } < />
    )
}

export default Register
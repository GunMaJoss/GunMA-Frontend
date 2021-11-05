import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Popup from "reactjs-popup";
import Regis from './Regis';
import styled from 'styled-components';


const Section = styled.section`
  background-color: aliceblue;
  height: 350px;
  width: 500px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;

function Login({close}) {
  const setLoading = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const setFlag = useState();
  React.useEffect(() => {
    if (email || password){
      setFlag(false);
    }
    return () => {};
  })

  const handleLogin = () => {
    setLoading(true);
    axios.post('http://api.gunma.my.id/api/login-user', { email: setEmail, password: setPassword })
    .then(response => {
      setLoading(false);
      console.log('string')
      history.push('/Home');
    }).catch(flag => {
      setLoading(false);
      setFlag("Something went wrong. Please try again later.");
    });
  }

    return ( 
      <Section>
        <div > {            
          <form>
          <a href className="close" onClick={close}>
          &times;
          </a>
            <h3 > Login </h3> 
            <div className = "form-group" >
            <label > Email : </label> 
            <input type="email" {...setEmail} autoComplete="new-email" />
            </div>
            <div className = "form-group" >
            <label > Password : </label> 
            <input type="password" {...setPassword} autoComplete="new-password" />
            </div>
            <div className="PopUp">
            <button type = "submit"
            className = "btn btn-dark btn-lg btn-block" onClick={handleLogin} > Login </button>
            </div>
            <div>
            <a> Don't Have Account ?
            <Popup modal trigger={<a> Sign Up</a>}>
            {close => <Regis close={close} />}
            </Popup>
            </a> 
            </div>
            </form>
            }
            </div>
            </Section>
        )
      }
export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Popup from "reactjs-popup";
import Regis from './Regis';
import styled from 'styled-components';


const Section = styled.section`
  background-color: #EDEFFD;
  height: 350px;
  width: 500px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 10px 10px rgb(0 42 177 / 10%);
`;

const Title = styled.p`
text-align: center;
  color: #04050a;
  font-weight: 300;
  font-size: 35px;
`;

const Label = styled.p`
padding-left: 60px;
`;

const LabelPas = styled.p`
padding-left: 50px;
`;

const Left = styled.div`
  padding-left: 165px;
  padding-top: 25px;
`;

const LeftButton = styled.div`
  padding-left: 40px;
`;

const Right = styled.div`
  padding-top: 10px;
  padding-left: 465px;
`;

const Acc = styled.div`
padding-left: 8px;
font-size: 12px;
color : #326A88;
`;

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-top: 40px;
  width: 90px;
  height: 35px;
  line-height: 50px;
  font-size: 17px;
  text-align: center;
  color: #000000;
  cursor: pointer;
  background: #FAE57C;
  text-decoration: none;
  box-shadow: 0 15px 14px rgb(0 42 177 / 12%);
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
            <Right>
          <a href className="close" onClick={close}>
          &times;
          </a>
          </Right>
          <Title>
          Login 
          </Title>
          <Left>
         
            <div className = "form-group" >
            <Label> <br/>Email : <br/>
            </Label> 
            <input type="email" {...setEmail} autoComplete="new-email" />
            </div>
            <div className = "form-group" >
            <LabelPas ><br/> Password : <br/> 
            </LabelPas> 
            
            <input type="password" {...setPassword} autoComplete="new-password" />
            </div>
            
            <LeftButton>
            <div className="PopUp">
            <Button type = "submit"
            className = "btn btn-dark btn-lg btn-block" onClick={handleLogin} > Login </Button>
            </div>
            </LeftButton>
           
            <Acc>
            <a align="center">  Don't Have Account ?
            <Popup modal trigger={<u> Sign Up</u>}>
            {close => <Regis close={close} />}
            </Popup>
            </a> 
            </Acc>

            </Left>
            </form> 
            }
            </div>
            </Section>
        )
      }
export default Login;
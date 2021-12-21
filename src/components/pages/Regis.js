import React, { useState } from 'react';
//import axios from 'axios';
import Popup from "reactjs-popup";
import styled from 'styled-components';
//import { useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const Section = styled.section`
  background-color: #EDEFFD;
  height: 500px;
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

const LabelRePas = styled.p`
padding-left: 5px;
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

function Regis({close}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [error] = useState(false);

    async function HandleRegister () {

      let item = {name,email,password,password_confirmation}
      console.warn(item);

      let result= await fetch('http://127.0.0.1:8000/api/register',{
        method : 'POST' ,
        headers : {
          "Accept": "application/json"
        },
        body: JSON.stringify(item)
      })
      result = await result.json()
      localStorage.setItem("user-info",JSON.stringify(result))
      }
    return (
      <Alert>
      {error && <Alert align="center" variant="danger">Salah Bro!!!</Alert>} 
        <Section>
            <div> {
        <form onSubmit={HandleRegister}>
        <Right>
           <a href className="close" onClick={close}>
           &times;
           </a>
                </Right>
                <Title> Register </Title> 
                <Left>
                <div className = "form-group" >
                <Label > Name <br/></Label> 
                <input type = "email"
                className = "form-control"
                placeholder = "Enter email"
                onChange = {
                    (event) => setName(event.target.value) }
                />
                </div>                 
                <div className = "form-group" >
                <Label > Email <br/></Label> 
                <input type = "email"
                className = "form-control"
                placeholder = "Enter email"
                onChange = {
                    (event) => setEmail(event.target.value) }
                /> 
                </div>
                <div className = "form-group" >
                <LabelPas > <br/>Password<br/> </LabelPas> 
                <input type = "password"
                className = "form-control"
                placeholder = "Enter password"
                onChange = {
                    (event) => setPassword(event.target.value) }
                /> 
                </div>
                <div className = "form-group" >
                <LabelRePas > <br/>Password Confirmation<br/> </LabelRePas> 
                <input type = "password"
                className = "form-control"
                placeholder = "Re-Enter password"
                onChange = {
                    (event) => setPasswordConfirmation(event.target.value) }
                /> 
                </div>
                <LeftButton>
                <div>
                <Button type = "submit"
                className = "btn btn-primary" onClick={HandleRegister}> Register </Button> 
                </div>
                </LeftButton>
                <div>
                <Acc>
                <a href>already Registered ?
                <Popup onClick={close} modal trigger={<u> Sign In</u>}>
                </Popup>
                </a> 
            </Acc>
            </div>
          </Left> 
        </form>
      }
    </div>      
    </Section>  
    </Alert>  
  )
}
export default Regis;
import React, { useState } from 'react';
import Login from './Login';
import axios from 'axios';
import Popup from "reactjs-popup";
import styled from 'styled-components';
import { useHistory } from 'react-router';

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

const LabelEmail = styled.p`
padding-left: 60px;
`;

const LabelPas = styled.p`
padding-left: 50px;
`;

//const LabelRePas = styled.p`
//padding-left: 20px;
//`;

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

    const history = useHistory;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
//  const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const setAlert = useState();


    const HandleRegister = async () => {
      
        //initialize formData
        const formData = new FormData();
  
        //append data to formData
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        //formData.append('password_confirmation', passwordConfirmation);
  
        //send data to server
        await axios.post('http://api.gunma.my.id/api/v1/register-user', formData)
        .then(() => {
            //redirect to login page
            history.push('/Login');
        })
        .catch((error) => {
            setAlert("Something went wrong. Please try again later.");
        })
    };


    return ( 
        <Section>
            
            <div> {
        <form>
        <Right>
           <a href className="close" onClick={close}>
           &times;
           </a>
                </Right>

                <Title> Register </Title>
                
                <Left>
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
                <Label > <br/>Password<br/> </Label> 
                <input type = "password"
                className = "form-control"
                placeholder = "Enter password"
                onChange = {
                    (event) => setPassword(event.target.value) }
                /> 
                </div>

                <LeftButton>
                <div>
                <Button type = "submit"
                className = "btn btn-dark btn-lg btn-block" > Register </Button> 
                </div>
                </LeftButton>

                <div>
                <Acc>
                <a>already Registered ?
                <Popup modal trigger={<u> Sign In</u>}>
                {close => <Regis close={close} />}
                </Popup>
                </a> 
            </Acc>
            </div>
          </Left> 
        </form>
      }
    </div>      
    </Section>  
  )
}
export default Regis
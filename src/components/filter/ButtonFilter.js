import React, { useState, useEffect } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import styled from 'styled-components'
import FilterPaid from '../pages/Feature/ListMagang/FilterPaid'
import FilterWFH from '../pages/Feature/ListMagang/FilterWFH'
import { useHistory } from 'react-router-dom'
import { Button } from '../Button'

const ButtonFi = styled.button`
border: 2.5px solid #E7EDF1; 
background: transparent;       
    color: black;  
padding: 8px 23px;
position: absolute;
  left: 50%;
  border-radius: 20px;

`

const ButtonFi2 = styled.button`
border: 2.5px solid #E7EDF1; 
background: transparent;          
    color: black;  
    padding: 8px 23px;
position: absolute;
  left: 55.5%;
  border-radius: 20px;
`


//  const clickMe =()=>{
//    console.log("simple click event");
  
//  }


// function clickMe(){
// //   setClickMe(prev => !prev)
      

//  }

// const ButtonToggle = styled.button`
//   opacity : 0.7;
//   ${({active}) => active && 
//   `
//   opacity: 1;
//   `}
// `;

//   const types = ['WFH' , 'Paid'];
 
//   function ToggleGroup(){
//    const [active,setActive] = useState(types[0]);
//    return (
//    <div>
//     {types.map(type => (
//       <ButtonToggle> {type} </ButtonToggle>
//       ))} 
//     </div>
//     );
//    }

export default function ButtonFilter (){

  const history = useHistory();
  const clickMe = () => history.push('/FilterPaid');    
  const Handleclick = () => history.push('/FilterWFH');  

  return(
    <div>

     {/* <Link to='/FilterPaid'  onClick={clickMe}>
      Paid
      </Link> */}
      
      {/* <ButtonFi type="button" onClick={clickMe}>
      Go home
    </ButtonFi> */}

      <ButtonFi  onClick={clickMe}>
      Paid
      </ButtonFi>

      <ButtonFi2  onClick={Handleclick}>
      WFH
      </ButtonFi2>


      {/* <div className="Login">
            <ButtonFi type = "submit"
            className = "btn btn-dark btn-lg btn-block"
            onClick={clickMe}> Login </ButtonF>
            </div> */}
      
      {/* <Link to='/FilterWFH'  onClick={clickMe}>
      WFH
      </Link>
       */}
      
      </div>
  )
}
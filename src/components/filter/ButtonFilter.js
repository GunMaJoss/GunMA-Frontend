import React, { useState, useEffect, active } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import styled from 'styled-components'
import FilterPaid from '../pages/Feature/ListMagang/FilterPaid'
import FilterWFH from '../pages/Feature/ListMagang/FilterWFH'
import { useHistory } from 'react-router-dom'
import { Button } from '../Button'

const ButtonFi = styled.button`
border: 2.5px solid #FEF7D8; 
background: transparent;       
    color: black;  
    padding:8px 25px;
position: absolute;
  left: 50%;
  border-radius: 20px;
  //hover : #3E83A8;
  transition : ease background-color 250ms;
  cursor : pointer;
  &:hover {
    background-color: var(--warning);
  }
 
`;

const ButtonFi2 = styled.button`
border: 2.5px solid #FEF7D8; 
background: transparent;      
cursor : pointer;    
    color: black;  
    padding:8px 25px;
position: absolute;
  left: 56%;
  border-radius: 20px;
  transition : ease background-color 250ms;
  &:hover {
    background-color: var(--warning);
  }
`

// const theme = {
//   blue: {
//     default: "2.5px solid #E7EDF1",
//       hover :"2.5px solid #3E83A8",
    
//   }
// }

// const ButtonToggle = styled.button`
//  background-color : ${props => theme[props.theme].default}; 
//  background: transparent;
// cursor : pointer;    
//     color: black;  
//     padding:8px 25px;
//     border: 2.5px solid #6EA2BE; 
//   border-radius: 20px;
//    opacity : 0.7;
//    ${({active}) => active && 
//    `
//    opacity: 1;
//    `}
//    &:disabled{
//      cursor : default;
//      opacity: 0.8;
//    }
//  `;

 
// ButtonToggle.defaultProps = {
//   theme : "blue"
// };


//    const types = ['WFH', 'Paid'];
   

//    function ToggleGroup(){
//     const history = useHistory();
    
//     const onCLick = () => history.push('/SectionPaid') ;   
//     const [active,setActive] = useState(types[0]);

//     return (
//    <div>
//      {types.map(type => (
//        <ButtonToggle to = '/SectionPaid'
    
//          active={active == type}
//           onClick={() => setActive(type)} >
//          {type} 
//          </ButtonToggle>
         
//        ))} 
//      </div>
//      );
//     }

   

export default function ButtonFilter (){

  const history = useHistory();
  const clickMe = () => history.push('/SectionPaid') ;    
  const Handleclick = () => history.push('/SectionWFH');
  
  
  return(
    <div>

     {/* <Link to='/FilterPaid'  onClick={clickMe}>
      Paid
      </Link> */}
      
      {/* <ButtonFi type="button" onClick={clickMe}>
      Go home
    </ButtonFi> */}

{/* <ToggleGroup/>  */}


      <ButtonFi bsStyle="overlay" onClick={clickMe}
     >
      
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
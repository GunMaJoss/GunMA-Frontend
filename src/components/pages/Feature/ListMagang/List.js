import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem2 from './CardItemMenu';
import './List.css';
import ButtonFi from "../../../filter/ButtonFilter";
import { isLogin } from "../../Navbar/auth";

export default function List() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
        .get('https://api.gunma.my.id/api/v1/internship')
        .then((res) => {
            console.log(res.data);
            setData(res.data);
            
        })
        .catch((err) => {
            console.log(err);
        }); 
}, []);

      return (
        <section className="section-card2">
        <ButtonFi/>
        <div className='card2'>
        { data.map(data=>

    <div className='card2__container'>

        <div className='card2__wrapper'>
        <ul className='card2__items'>
            <CardItem2
              src={data.imageUrl}
              label={data.programName} 
              text= {data.description}
              //text1 = {data.requirement}
              //descripsi = {data.requirement}
              path = {isLogin} 
            />
          </ul>
          </div>
          </div>
          
        
            )}
          </div>
          </section>

          
      );
    }
  
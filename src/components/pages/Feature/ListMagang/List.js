import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem2 from './CardItemMenu';
import CardItem from '../Home/card/CardItem';
import './List.css';
import ButtonFi from "../../../filter/ButtonFilter";
import { useHistory, Link } from 'react-router-dom';
import Hero from '../Home/Hero'

export default function List() {

  //const history = useHistory();
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
        .get('https://api.gunma.my.id/api/v1/internship/')
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
          

{/* <div className="card-info">
          <h2>GunMA</h2>
          <div className="card-box-info">
          Iframe 
          <div class="youtube">
             <iframe width="590" height="375" src="https://youtu.be/WMo-lk0YuFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div> */}
        <ButtonFi/>

        <div className='card2'>
        {Object.keys(data).map((item, i) => (
        <div className='card2__container'>

        <div className='card2__wrapper'>
          
        <ul className='card2__items'>

        <Link to= {`/DetailMagang/${data[item].id}`} style={{ textDecoration: 'none' }}>
            <CardItem2
              src={data[item].imageUrl}
              label={data[item].programName} 
              text= {data[item].description}
              //text1 = {data.requirement}
              //descripsi = {data.requirement}
            />
           
            </Link>
          </ul>
          </div>
          </div>
        ))}
          </div>
          
       
         </section>
          
      );
    }
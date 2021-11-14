/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardDetail from './CardDetail';
import './Detail.css';

export default function Detail() {
  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    axios
        .get('http://127.0.0.1:8000/api/v1/internship')
        .then((res) => {
            console.log(res.data);
            setData(res.data);
            
        })
        .catch((err) => {
            console.log(err);
        }); 
}, []);

      return (
        <section className="section-cardD">
        <div className='cardD'>
        { data.map(data=>

        <div className='cardD__container'>
        <div className='cardD__wrapper'>
        <ul className='cardD__items'>
            <CardDetail
              src={data.imageUrl}
              label={data.programName}
              text_1 = {data.description}
              text_2 = {data.benefit}
              text_3 = {data.requirement}
              link = {data.registrationLink}
              text_4 = {data.duration}
              text_5 = {data.closeRegistration}
              text_6 = {data.location.locationName}                 
              text_7 = {data.tag.tagName}
            />
          </ul>
          </div>
          </div>
            )}
          </div>
          </section>     
      );
    }
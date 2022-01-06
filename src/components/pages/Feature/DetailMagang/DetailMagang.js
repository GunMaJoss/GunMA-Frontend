/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useState} from "react";
import axios from "axios";
import CardDetail from './CardDetail';
import './DetailMagang.css';
import { Link, useLocation, useParams} from "react-router-dom";

export default function Detail() {
  const [data, setData] = useState([]);
  const {id}= useParams();

  useEffect(() => {
    axios
        .get('https://api.gunma.my.id/api/v1/internship/' +id)
        .then((res) => {
            console.log(res.data);
            setData(res.data);
            
        })
        .catch((err) => {
            console.log(err);
        }); 
},[]);

      return (
        <section className="section-cardD">
        <div className='cardD'>
        <div className='cardD__container'>
        <div className='cardD__wrapper'>
        <ul className='cardD__items'>
            <CardDetail
              src={data.imageUrl}
              label={data.programName}
              text_1 = {data.description}
              // text_2 = {data.isPaid}
              text_3 = {data.benefit}
              text_4 = {data.requirement}
              link = {data.registrationLink}
              text_5 = {data.duration}
              text_6 = {data.closeRegistration}
              // text_7 = {data.location.locationName}                 
             // text_8 = {data.tag.tagName}
            />
          </ul>
          </div>
          </div>
          </div>
          </section>     
      );
    }
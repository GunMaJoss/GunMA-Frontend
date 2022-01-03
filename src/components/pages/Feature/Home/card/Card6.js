import React from 'react';
import './Card6.css';
import CardItem6 from './CardItem6';

function Card6() {
  return (
    <section className="section-card6">
    <div className='card6'>
      <h1><span>GunMA  </span>Advantages </h1>
      <div className='card6__container'>
        <div className='card6__wrapper'>
          <ul className='card6__items'>
            <CardItem6
              src='images/detail3.png'
              text='With the detail information feature, users can see information from the company along with clear requirements, so that users can prepare ahead of time.'
              label='View Internship Information in Detail'
              path='#'
            />
            <CardItem6
              src='images/upload.png'
              text='In addition to users from internal parties, we provide features for companies so that they can upload internships along with the required requirements.'
              label='Upload Internship Information'
              path='#'
            />
             <CardItem6
              src='images/r1.png'
              text='Gunma provides information related to internships spread throughout Indonesia. gunma can help college students and final year students to get internship experience in well-known companies according to their majors and desires.'
              label='Company Place Recommendation'
              path='#'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem6
              src='images/paid.png'
              text='One of the features that GunMA has is paid unpaid which will display companies that pay internally, so that users are expected to be able to choose the company according to their needs.'
              label='Filter Internship Paid Unpaid'
              path='#'
            />
            <CardItem6
              src='images/who.png'
              text='Another feature that GunMA has is WFH WFO which will display companies that facilitate internal workers to remotely work from home, so that users are expected to be able to choose a company according to their conditions.'
              label='Filter Internship WFH WFO'
              path='#'
            />
             <CardItem6
              src='images/kotaa.png'
              text='Another interesting feature is the recommendation by city which will display a list of companies based on the city of the company. GunMA helps users to choose a company based on the city where they live.'
              label='Filter By City'
              path='#'
            />
         
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Card6;
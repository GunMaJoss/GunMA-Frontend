import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='card-bg'>
     <div className='cards'>
      
      <h1>GunMA</h1>
      <div className='cards__container'>

        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            
            <CardItem
              src='images/list3.png'
              text='Gunma provides information related to internships spread throughout Indonesia. gunma can help college students and final year students to get internship experience in well-known companies according to their majors and desires.'
              label='List Internship'
              path='/'
            />
            <CardItem
              src='images/detail2.png'
              text='Gunma provides accurate and detailed information related to internships. Each information provided includes details of the contact person related to the relevant company who can be contacted.'
              label='Detail Internship'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/relevant2.png'
              text='Gunma presents information related to internships in a precise, accurate and reliable manner. Every information uploaded goes through the uploaders validation stage so that the relevance of the information is always maintained'
              label='Relevant Information'
              path='/'
            />
            <CardItem
              src='images/design2.png'
              text='Gunma application is designed as good and convenient as possible to meet user needs. In addition, an attractive design can also make users want to linger to use this application through the website or mobile apps'
              label='Interface Design'
              path='/'
            />
         
          </ul>
          </div>
    </div>
    </div>
    </div>
  
  );
}

export default Cards;
import React from 'react';
import { Link } from 'react-router-dom';

function CardDetail(props) {
  return (
    <>
      <li className='cardD__item'>
        <Link className='cardD__item__link' to={props.path}>
          <figure className='cardD__item__pic-wrap' data-category={props.label}>
            <img
              className='cardD__item__img'
              alt='GunMA'
              src={props.src}
            />
          </figure>
          <div className='cardD__item__info'>
            <h3>Description :</h3>
            <h3 className='cardD__item__text'>{props.text_1}</h3>
            <h3>Benefit :</h3>
            <h3 className='cardD__item__text'>{props.text_2}</h3>
            <h3>Requirement :</h3>
            <h3 className='cardD__item__text'>{props.text_3}</h3>
            <h3>Registration :</h3>
            <h3 className='cardD__item__text'>{props.link}</h3>
            <h3>Duration :</h3>
            <h3 className='cardD__item__text'>{props.text_4} Month</h3>
            <h3>Close Registration :</h3>
            <h3 className='cardD__item__text'>{props.text_5}</h3>
            <h3>location :</h3>
            <h3 className='cardD__item__text'>{props.text_6}</h3>
            <h4>tag :</h4>
            <h3 className='cardD__item__text'>{props.text_7}</h3>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardDetail;
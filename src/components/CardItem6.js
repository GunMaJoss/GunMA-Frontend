import React from 'react';
import { Link } from 'react-router-dom';

function CardItem6(props) {
  return (
    <>
      <li className='card6__item'>
        <Link className='card6__item__link' to={props.path}>
          <figure className='card6__item__pic-wrap' data-category={props.label}>
            <img
              className='card6__item__img'
              alt='GunMA'
              src={props.src}
            />
          </figure>
          <div className='card6__item__info'>
            <h5 className='card6__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem6;
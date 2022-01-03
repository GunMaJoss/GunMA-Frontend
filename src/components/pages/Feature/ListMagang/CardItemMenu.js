import React from 'react';
import { Link } from 'react-router-dom';

function CardItemMenu(props) {
  return (
    <>
      <li className='card2__item'>
        <div className='card2__item__link'>
          <figure className='card2__item__pic-wrap' data-category={props.label}>
            <img
              className='card2__item__img'
              alt='GunMA'
              src={props.src}
            />
          </figure>
          <div className='card2__item__info'>
          <h5 className='card2__item__title'>{props.label}</h5>
            <h5 className='card2__item__text'>{props.text}</h5>

          </div>
        </div>
      </li>
    </>
  );
}

export default CardItemMenu;
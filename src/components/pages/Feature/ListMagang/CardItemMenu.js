import React from 'react';
import { Link } from 'react-router-dom';

function CardItemMenu(props) {
  return (
    <>
      <li className='card2__item'>
        <Link className='card2__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='card2__item__img'
              alt='GunMA'
              src={props.src}
            />
          </figure>
          <div className='card2__item__info'>
            <h5 className='card2__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemMenu;
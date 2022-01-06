import React from 'react';

function CardDetail(props) {
  return (
    <>
      <li className='cardD__item'>
          <figure className='cardD__item__pic-wrap'>
            <img
              className='cardD__item__img'
              alt='GunMA'
              src={props.src}
            />
          </figure>
          <div className='cardD__item__info'>
            <h2 className='cardD__item__title'>{props.label}</h2><prev/>
            <h3 className='fas fa-file-alt'> Description :</h3><prev/>
            <h3 className='cardD__item__text'>{props.text_1}</h3>
            {/* <h3>Paid :</h3>
            <h3 className='cardD__item__text'>{props.text_2}</h3> */}
            <h3 className='fas fa-dollar-sign'> Benefit :</h3><prev/>
            <h3 className='cardD__item__text'>{props.text_3}</h3>
            <h3 className='fas fa-tasks'> Requirement :</h3><span/>
            <h3 className='cardD__item__text'>{props.text_4}</h3>
            <h3 className='fas fa-registered'> Registration :</h3><prev/>
            <h3 className='cardD__item__text'>{props.link}</h3>
            <h3 className='fas fa-hourglass-half'> Duration :</h3><span/>
            <h3 className='cardD__item__text'>{props.text_5} Months</h3>
            <h3 className='fas fa-times-circle'> Close Registration :</h3><prev/>
            <h3 className='cardD__item__text'>{props.text_6}</h3>
          </div>
          <i class=""></i>
      </li>
    </>
  );
}

export default CardDetail;
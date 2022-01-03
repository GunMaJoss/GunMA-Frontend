import React from 'react';
import './FilterSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function FilterSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__filter-section' : 'home__filter-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__filter-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__filter-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__filter-subtitle'
                      : 'home__filter-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to='////play.google.com/store/apps/details?id=com.gunmajoss.gunma' target='_blank' >
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__filter-img-wrapper'>
                <img src={img} alt={alt} className='home__filter-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterSection;
import React from 'react';
import './DashboardSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function DashboardSection({
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
        className={lightBg ? 'home__dashboard-section' : 'home__dashboard-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__dashboard-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__dashboard-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__dashboard-subtitle'
                      : 'home__dashboard-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to='/download'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__dashboard-img-wrapper'>
                <img src={img} alt={alt} className='home__dashboard-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardSection;

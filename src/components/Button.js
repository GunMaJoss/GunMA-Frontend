import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

export function Button() {
    return(
        <Link to='download'>
            <button className='btn'>Download GunMA
            </button>
        </Link>
    );
}
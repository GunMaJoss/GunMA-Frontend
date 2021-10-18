import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import FilterSection from '../DashboardSection';
import { homeObjThree} from './DataBantuan';

import '../../App.css';

function Bantuan() {
        return (
            <>
            <FilterSection {...homeObjThree} />
            </>
        )
 
}
export default Bantuan;
import React, { useState} from 'react';
import FilterSection from '../FilterSection';
import { homeObjThree} from './DataBantuan';

function Bantuan() {
        return (
            <>
            <FilterSection {...homeObjThree} />
            </>
        )
 
}
export default Bantuan;
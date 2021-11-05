import React from 'react'
import FilterSection from '../../../FilterSection';
import HeaderSection from '../../../HeaderSection';
import { homeObjOne, homeObjThree} from './DataFilter';

export default function Informasi(){
    return (
      <>
      <HeaderSection {...homeObjOne} />
      <FilterSection {...homeObjThree} />
        </>
      );
}
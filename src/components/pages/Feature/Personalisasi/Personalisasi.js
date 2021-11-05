import React from 'react'
import HeroSection from '../../../HeroSection';
import HeaderSection from '../../../HeaderSection';
import { homeObjOne, homeObjThree} from './Data';

export default function Personalisasi(){
    return (
      <>
      <HeaderSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
        </>
      );
}
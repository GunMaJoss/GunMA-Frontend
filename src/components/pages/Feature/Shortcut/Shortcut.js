import React from 'react'
import HeroSection from '../../../HeroSection';
import HeaderSection from '../../../HeaderSection';
import { homeObjOne, homeObjThree} from './DataShortcut';

export default function Shortcut(){
    return (
      <>
      <HeaderSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
        </>
      );
}
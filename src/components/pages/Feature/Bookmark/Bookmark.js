import React from 'react'
import HeroSection from '../../../HeroSection';
import HeaderSection from '../../../HeaderSection';
import { homeObjOne, homeObjThree} from './DataBookmark';

export default function Bookmark(){
    return (
      <>
      <HeaderSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
        </>
      );
}
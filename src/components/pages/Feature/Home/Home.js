import React from 'react'
import DashboardSection from '../../../DashboardSection';
import { homeObjThree} from './DataHome';
import Cards from './card/Cards';
import Card6 from './card/Card6';
import Slider from './Slider/Slider';
import Hero from './Hero'


function Home(){
    
    return (
        <div>
        <Hero/>
       <Cards/>
       <Card6/>
       <Slider/>
        </div>
    )
}
export default Home;
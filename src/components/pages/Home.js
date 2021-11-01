import React from 'react'
import DashboardSection from '../DashboardSection';
import { homeObjThree} from './DataHome';
import Cards from '../Cards';
import Card6 from '../Card6';
import Slider from '../Slider';


function Home(){
    return (
        <div>
        <DashboardSection {...homeObjThree} />
       <Cards/>
       <Card6/>
       <Slider/>
        </div>
    )
}
export default Home;
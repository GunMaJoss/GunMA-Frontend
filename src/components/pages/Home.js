import React from 'react'
import FilterSection from '../DashboardSection';
import { homeObjThree} from './DataHome';

function Home(){
    return (
        <>
        <FilterSection {...homeObjThree} />
        </>
    )
}
export default Home;
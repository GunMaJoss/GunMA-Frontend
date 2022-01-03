import {useEffect, useState} from 'react';
import './App.css';
import Navbar from './components/pages/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import app from './components/pages/Feature/Home/Home'
import Personalisasi from './components/pages/Feature/Personalisasi/Personalisasi'
import Shortcut from './components/pages/Feature/Shortcut/Shortcut'
import Bookmark from './components/pages/Feature/Bookmark/Bookmark'
import Informasi from './components/pages/Feature/Informasi/Informasi'
import Notifikasi from './components/pages/Feature/Notifikasi/Notifikasi'
import Filter from './components/pages/Feature/Filter/Filter'
import Footer from './components/pages/Footer/Footer';
import Bantuan from './components/pages/Feature/Bantuan/Bantuan';
import Fitur from './components/pages/Feature/Fitur/Fitur';
import AboutUs from './components/pages/AboutUs/AboutUs';
import Home from './components/pages/Feature/ListMagang/List';
import Login from './components/pages/Login'
import FilterPaid from './components/pages/Feature/ListMagang/FilterPaid';
import FilterWFH from './components/pages/Feature/ListMagang/FilterWFH';
import Navbarlogin from './components/pages/Navbar/Navbarlogin';
import DetailMagang from './components/pages/Feature/DetailMagang/DetailMagang';
import Profile from './components/pages/Feature/Profil/Profile';
import Regis from './components/pages/Regis'
import Video from './components/pages/Feature/ListMagang/Video';
import Index from './components/pages/Feature/ListMagang/Index';
import SectionPaid from './components/pages/Feature/ListMagang/SectionPaid';
import SectionWFH from './components/pages/Feature/ListMagang/SectionWFH';
import { isLogin } from './components/pages/Navbar/auth';

function App() {
 const[loginNav, setloginNav] = useState(true) 
  //let {isLoggedIn} = this.state;
//   useEffect(() => {
//   const isLogin = () => {
//     if (localStorage.getItem("token")) {
//       return true;
//     }
//     return false;
//   };
// },[])
useEffect(() => {
// const itLogin = () => {
  if (localStorage.getItem("token")) {
    console.log("berhasil")
    setloginNav(false);
  }
  else {
    console.log("gagal")
    setloginNav(true);
  }
// };
},[])

  return (
    <Router> 
     
    {loginNav
      ? (<Navbar />)
      : (<Navbarlogin />)
    }

       <Switch>
       <Route path='/' exact component={Index}/>
       <Route path='/list' exact component={Home}/>
         <Route path='/app' exact component={app}/>
         <Route path='/SectionPaid' exact component={SectionPaid}/>
         <Route path='/SectionWFH' exact component={SectionWFH}/>
         <Route path='/personalisasi' exact component={Personalisasi}/>
         <Route path='/shortcut' exact component={Shortcut}/>
         <Route path='/bookmark' exact component={Bookmark}/>
         <Route path='/informasi' exact component={Informasi}/>
         <Route path='/notifikasi' exact component={Notifikasi}/>
         <Route path='/filter' exact component={Filter}/>
         <Route path='/bantuan' exact component={Bantuan}/>
         <Route path='/fitur' exact component={Fitur}/>
         <Route path='/AboutUs' exact component={AboutUs}/>
         <Route path='/Login' exact component={Login}/>
         <Route path='/FilterPaid' exact component={FilterPaid}/>
         <Route path='/FilterWFH' exact component={FilterWFH}/>
         <Route path='/DetailMagang/:id' exact component={DetailMagang}/>
         <Route path='/profile' exact component={Profile}/>
         <Route path='/Register' exact component={Regis}/>
         
       </Switch>
       <Footer/>
    </Router>
   
  );

}


export default App;
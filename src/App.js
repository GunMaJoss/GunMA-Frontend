import React from 'react';
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

function App() {

  //let {isLoggedIn} = this.state;
  const isLogin = () => {
    if (localStorage.getItem("user-info")) {
      return true;
    }
    return false;
  };

  return (
    <Router> 

      {isLogin
        ? <Navbar />
        : <Navbarlogin />
      }

        {/* <Navbar />
       < Navbarlogin /> */}

       <Switch>
       <Route path='/' exact component={Home}/>
         <Route path='/app' exact component={app}/>
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
         <Route path='/Detail' exact component={DetailMagang}/>
         <Route path='/profile' exact component={Profile}/>
         <Route path='/Register' exact component={Regis}/>
       </Switch>
       <Footer/>
    </Router>
  );
}

export default App;

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
import Detail from './components/pages/Feature/DetailMagang/Detail';

function App() {
  return (
    <Router> 
       <Navbar />
       <Route path='/detail' exact component={Detail}/>
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
       </Switch>
       <Footer/>
    </Router>
  );
}

export default App;

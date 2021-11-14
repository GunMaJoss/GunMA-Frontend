import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Feature/Home/Home'
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
import List from './components/pages/Feature/ListMagang/List';
import Login from './components/pages/Login'

function App() {
  return (
    <Router> 
       <Navbar />
       <Route path='/list' exact component={List}/>
       <Switch>
       
         <Route path='/' exact component={Home}/>
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

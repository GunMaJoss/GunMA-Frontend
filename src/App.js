import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Personalisasi from './components/pages/Personalisasi'
import Shortcut from './components/pages/Shortcut'
import Bookmark from './components/pages/Bookmark'
import Informasi from './components/pages/Informasi'
import Notifikasi from './components/pages/Notifikasi'
import Filter from './components/pages/Filter'
import Footer from './components/Footer';

function App() {
  return (
    <Router> 
       <Navbar />
       <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/personalisasi' exact component={Personalisasi}/>
         <Route path='/shortcut' exact component={Shortcut}/>
         <Route path='/bookmark' exact component={Bookmark}/>
         <Route path='/informasi' exact component={Informasi}/>
         <Route path='/notifikasi' exact component={Notifikasi}/>
         <Route path='/filter' exact component={Filter}/>
       </Switch>
       <Footer/>
    </Router>
  );
}

export default App;

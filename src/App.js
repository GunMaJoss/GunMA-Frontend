import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import Home from './components/frontend/Home';
import Login from './frontend/auth/Login';
import Register from './frontend/auth/Register';


function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/admin" name="Admin" render={(props) => <MasterLayout {...props} />} />
        </Switch>


      </Router>
    </div>
  );
}

export default App;

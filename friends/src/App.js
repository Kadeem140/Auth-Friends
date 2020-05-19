import React from 'react';
import {Route, Link} from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';
import Friendslist from './components/FriendsList'

import Login from './components/Login'

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Route to="/login" component={Login} /> */}
      <Route to='/' component={Login} />

      <PrivateRoute to='/friendslist' component={Friendslist}/>
    </div>
  );
}

export default App;

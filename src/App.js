import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import HeaderBar from './components/HeaderBar'
import Signup from './components/Signup'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Route path='/signup' exact component={Signup} />
      <Route path='/login' exact component={Login} />

    </div>
  );
}

export default App;

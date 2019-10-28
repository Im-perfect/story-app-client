import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import HeaderBar from './components/HeaderBar'
import Lobby from './components/Lobby'
import Signup from './components/Signup'
import Login from './components/Login'
import { CreateGameForm } from './components/CreateGameForm';

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Route path='/signup' exact component={Signup} />
      <Route path='/login' exact component={Login} />
      <Route path='/game' exact component={Lobby} />
      <Route path='/game/create' exact component={CreateGameForm} />
    </div>
  );
}

export default App;

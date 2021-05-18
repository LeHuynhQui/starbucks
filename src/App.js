import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import  {AnimatePresence} from 'framer-motion'

import './App.css';
import Main from './components/Main';
import Green from './pages/Green';
import LightPink from './pages/LightPink';
import DarkPink from './pages/DarkPink';

function App() {
  return (
    <Router>
      <Main />
      <Route 
        render={({location}) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route exact path='/' render={() => <Green />} />
              <Route exact path='/light-pink' render={() => <LightPink />} />
              <Route exact path='/dark-pink' render={() => <DarkPink />} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;

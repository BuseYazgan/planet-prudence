import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import AboutPage from './pages/AboutPage/AboutPage';
import Commissions from './pages/Commissions/Commissions';
import ContactPage from './pages/ContactPage/ContactPage';
import HomePage from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'  exact component={HomePage}/>
        <Route path='/commissions' component={Commissions}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/signup' component={SignUpPage}/>
        <Route path='/contact' component={ContactPage}/>
      </Switch>
    </Router>
  );
}

export default App;

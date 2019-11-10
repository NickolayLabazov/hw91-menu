import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from './components/HomePage.jsx';
import DriftPage from './components/DriftPage.jsx';
import TimeAttackPage from './components/TimeAttackPage.jsx';
import ForzaPage from './components/ForzaPage.jsx';
import Menu from './components/Menu.jsx';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}
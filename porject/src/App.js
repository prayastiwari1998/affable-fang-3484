import React from 'react';
import { BrowserRouter as Router, Switch, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Men from './Men';
import Women from './Women';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Routes path="/men">
          <Men />
        </Routes>
        <Routes path="/women">
          <Women />
        </Routes>
        <Routes path="/">
          <Home />
        </Routes>
      </Switch>
    </Router>
  );
}

export default App;

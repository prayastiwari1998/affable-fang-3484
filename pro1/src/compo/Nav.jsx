import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hom  from './Home'
import Products from  "./Pro"
import './nav.css'
// import logo

const Navbar = () => {
  return (
    <Router>
<div className='nav_top'>
<a href="C:\Users\Dell\Desktop\affable-fang-3484\pro1\src\compo\Pro.jsx"><button className='log_btn'> <h4>Sign up or logIn</h4></button></a>
</div>


      <nav className="navbar">
        <Link to="/" className="navbar-logo">
         <img src="../logo.jpg" alt="logo" />
        </Link>
        
            <div>
                <Link to="/" >Home </Link>
            </div>
          <div>
            <Link to="/pro">Products</Link>
          </div>
          <div>
            <Link to="/woman">Woman</Link>
          </div>
          <input type="text" className='search'/>
        
      </nav>
      <Routes>
        <Route path="/Home" exact component={Hom} />
        <Route path="/pro" component={Products} />
        <Route path="/woman" component={Woman} />
      </Routes>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const Man = () => {
  return (
    <div>
      <h1>Man</h1>
    </div>
  );
};

const Woman = () => {
  return (
    <div>
      <h1>Woman</h1>
    </div>
  );
};

export default Navbar;

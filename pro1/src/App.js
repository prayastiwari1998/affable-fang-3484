
// import './App.css';
import Footer from './compo/footer/Foot';
import Navbar from './compo/Nav';
import React from 'react';
import ImageContainer from './compo/banner/banner';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Product from './compo/products/Product';

function App() {
const [tog,settog] = React.useState(true);


  return (
    <div className="App">
   
<Navbar/> 
<ImageContainer imageUrl="https://cdna.lystit.com/cms/EN_XL_1be4462434.png" />
   
        {/* <Footer /> */}
        {/* <Product/> */}
        <Router>
      
        <Routes>
          // Your routes here
          {/* <ImageContainer imageUrl="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"/> */}
        </Routes>
        // Your main content here
        <Footer />
      </Router>
      
</div>
  );
}

export default App;

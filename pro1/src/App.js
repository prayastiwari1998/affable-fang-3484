
import Footer from './compo/footer/Foot';
import Navbar from './compo/Nav';
import React from 'react';
import ImageContainer from './compo/banner/banner';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Products from './compo/Pro';

function App() {
const [tog,settog] = React.useState(true);


  return (
    <div className="App">
   
<Navbar/> 
<ImageContainer imageUrl="https://cdna.lystit.com/cms/EN_XL_1be4462434.png" />
        <Router>
<Products/>
        <Routes>
      
        </Routes>
    
        {/* <Route path="/Por" component={Products} /> */}
        <Footer />
      </Router>
      
</div>
  );
}

export default App;

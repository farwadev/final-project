import React from 'react';
// import css
import './App.css'
// import nav , slider ,grids ,footer
import Navbar from './components/navbar'
import Slider from './components/slider'
import Accordion from './components/accordion'
import Footer from './components/footer'





function App(props) {
  return (
    <div>
      <>
      <Navbar/>
      <Slider/>
    <Accordion/>
      <Footer/>
      </>
      
    </div>
  );
}

export default App;
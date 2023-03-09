import React from 'react';
// import nav , slider , footer

import Navbar from '../components/navbar'
import Slider from '../components/slider'
import Footer from '../components/footer'
import Accordion from '../components/accordion'

function home(props) {
    return (
        <div>
            <Navbar/>
            <Slider/>
           <Accordion/>
            <Footer/>
        </div>
    );
}

export default home;
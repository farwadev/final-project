import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer'
import Cards from '../components/cards'
function categories(props) {
    return (
        <div>
            <Navbar/>
            <Cards/>
            <Footer/>
        </div>
    );
}

export default categories;
import React, { Component } from 'react';

import "./index.css"

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Home />
                <Footer />
            </div>
        );
    }
}

export default App;
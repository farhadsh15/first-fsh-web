import React, { Component } from 'react';

import "./index.css"

import Navbar from './components/Navbar';
import Baner from './components/Baner';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Baner />
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';

import Baner from './Home/Baner';
import Cards from './Home/Cards';
import Search from './Home/Search';
import Logos from './Home/Logos';

class Home extends Component {
    render() {
        return (
            <div>
                <Baner />
                <Cards />
                <Search />
                <Logos />
            </div>
        );
    }
}

export default Home;
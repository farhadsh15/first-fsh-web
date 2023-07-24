import React, { Component } from 'react';

import steyles from "./Search.module.css";

class Search extends Component {
    render() {
        return (
            <div className={steyles.Search}>
                <p>Search What you want</p>
                <input type="text" placeholder="Search ..." />
            </div>
        );
    }
}

export default Search;
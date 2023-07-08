import React from 'react';

import style from "./Navbar.module.css";
import logo from "../images/logo.png";

const Navbar = () => {
    return (
        <header className={style.header}>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Conect Us</li>
            </ul>
            <img src={logo} alt="logo" />
        </header>
    );
};

export default Navbar;
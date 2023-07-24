import React, { Component } from 'react';

import steyles from "./Logos.module.css";

import appleLogo from "../../images/apple.jpg"
import samsungLogo from "../../images/samsung.jpg"
import xiaomiLogo from "../../images/xiaomi.png"

class Logos extends Component {
    render() {
        return (
            <div className={steyles.Logos}>
                <h3>who suport us</h3>
                <div>
                    <img src={appleLogo} alt="logo" />
                    <img src={samsungLogo} alt="logo" />
                    <img src={xiaomiLogo} alt="logo" />
                </div>
            </div>
        );
    }
}

export default Logos;
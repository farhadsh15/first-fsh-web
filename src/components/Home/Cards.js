import React, { Component } from 'react';

import style from "./Cards.module.css";
import Card from '../Card';

import IphoneX from "../../images/iphonex.jpg"
import Iphone11 from "../../images/iphone11.jpg"
import Iphone12 from "../../images/iphone12.jpg"
import S21 from "../../images/S21.jpg"

class cards extends Component {
    render() {
        return (
            <div className={style.cards}>
                <Card image={IphoneX} name="IphoneX" cost="500 $" />
                <Card image={Iphone11} name="Iphone11" cost="650 $" />
                <Card image={Iphone12} name="Iphone12" cost="800 $" />
                <Card image={S21} name="S21" cost="790 $" />
            </div>
        );
    }
}

export default cards;
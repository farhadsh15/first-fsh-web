import React, { Component } from 'react';

import style from "./card.module.css"

import Up from "../images/up.svg";
import Down from "../images/down.svg";

class Card extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            // somePrice: 0,
        }
    }
    Down = () => {
        if(this.state.count > 0){
            this.setState(prevState => ({
            count : prevState.count - 1,
            }))
        }       
    }
    Up = () => {
        this.setState(prevState => ({
            count : prevState.count + 1,
        }))
    }
    render() {
        const {image, name, cost} = this.props;
        const {count} = this.state
        return (
            <div className={style.card}>
                <img src={image} alt='phonePhoto'/>
                <h3>{name}</h3>
                <p>{cost}</p>
                <div className={style.count}>
                    <img src={Down} alt='Down' className={count ? "" : style.deActiv} onClick={this.Down} />
                    <span className={style.countNum}>{count}</span>
                    <img src={Up} alt='Up' onClick={this.Up} />
                    {/* <span className={style.somePrice}>{somePrice}</span> */}
                </div>
            </div>
        );
    }
}

export default Card;
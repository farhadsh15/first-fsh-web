import React, { Component } from 'react';

import style from "./card.module.css"

class Card extends Component {
    render() {
        const {image, name, cost} = this.props;
        return (
            <div className={style.card}>
                <img src={image} alt='phonePhoto' />
                <h3>{name}</h3>
                <p>{cost}</p>
            </div>
        );
    }
}

export default Card;
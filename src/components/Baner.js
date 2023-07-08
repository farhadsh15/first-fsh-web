import React from 'react';

import style from "./Baner.module.css";
import banerPhoto from "../images/Baner.jpg";

const Baner = () => {
    return (
        <div className={style.Baner}>
            <img src={banerPhoto} alt='banerPhoto' />
            <h1>Farhad Shamsi</h1>
        </div>
    );
};

export default Baner;
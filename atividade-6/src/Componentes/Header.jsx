import React from 'react';
import {BiMoon} from 'react-icons/bi';
import './Header.css';

export default function Header(){
    return(
        <header>
            <h3 className="title">
                Where in the world ?
            </h3>
            <div className="toggle">
                <BiMoon/>
                <p>Change Mode</p>
            </div>
        </header>
    )
}
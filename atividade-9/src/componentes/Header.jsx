import React from 'react';
import { Link } from 'react-router-dom';
import {BiMoon} from 'react-icons/bi';
import './Header.css';

export default function Header(){
    return(
        <header>
            <Link to={'/'}>
            <h3 className="title">
                Where in the world ?
            </h3>
            </Link>
            <div className="toggle">
                <BiMoon/>
                <p>Change Mode</p>
            </div>
        </header>
    )
}
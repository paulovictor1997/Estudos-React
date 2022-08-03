import React from "react";
import { Link } from "react-router-dom";
import {FaArrowLeft} from 'react-icons/fa';

export default function Country(){
    return(
        <div>
            <h1>TESTE</h1>
            <div className="buttonBack">
                <Link to='/'><FaArrowLeft/>Back</Link>
            </div>
        </div>
    )
}


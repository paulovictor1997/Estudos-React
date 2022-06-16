import React from "react";
import './Load.css';
import loading from '../../img/Loading.png';

export default function Load(){
    return(
        <div className="loader_container">
            <img className ='loader'src={loading} alt="Loading" />
        </div>
    )
}
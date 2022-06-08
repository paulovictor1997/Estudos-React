import React from "react";
import './Container.css'

export default function Container(props){
    return(
        <div className='container min_heigth'>{props.children}</div>
    )
}
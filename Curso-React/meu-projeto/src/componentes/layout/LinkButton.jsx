import React from "react";
import './LinkButton.css'
import { Link } from 'react-router-dom'

export default function LinkButton({to,text}){
    return(
        <Link className='button' to={to}>
          {text}
        </Link>
    )
}
import React from "react";
import './SubmitButton.css';

export default function SubmitButton({text}){
    return(
        <div>
            <button className="button">{text}</button>
        </div>
    )
}
import React from "react";
import './Select.css';

export default function Select({text,name,options,handleOnchange,value}){
    return(
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Selecione uma opção</option>
            </select>
        </div>
    )
}
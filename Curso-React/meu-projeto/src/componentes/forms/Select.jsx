import React from "react";
import './Select.css';

export default function Select({text,name,options,handleOnchange,value}){
    return(
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnchange} value={value || ''}>
                <option>Selecione uma opção</option>
                {options.map((option) =>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
}
import React from "react";
import "./Input.css";

export default function Input({type,text,name,placeholder,handleOnchange,value}){
    return(
        <div className="form_control">
            <label htmlFor={name}>{text}:</label>
            <input type={type} 
            name = {name} 
            id = {name}
            placeholder ={placeholder}
            onChange = {handleOnchange}
            value = {value}
            />
        </div>
    )
}
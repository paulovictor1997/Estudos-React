import React from "react";
import Button from "@mui/material/Button";
import './styles.css';

export default function customButton(props){
    return(
        <Button variant="contained" color={props.color}>
            {props.text}
        </Button>
    )
}
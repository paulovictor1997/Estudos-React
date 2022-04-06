import React from "react";
import './App.css'
import Cards from "./Componentes/Cards";
import Footer from "./Componentes/Footer";

export default (props) =>{
    return(
        <div className="App">
            <Cards></Cards>
            <Footer>{props = 'Criado por : Paulo Victor'}</Footer>
        </div>
    )
}
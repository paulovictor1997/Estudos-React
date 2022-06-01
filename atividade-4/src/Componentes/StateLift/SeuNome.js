import { useState } from "react"

export default function SeuNome({setNome}){
    

    return(
        <div>
        <h3>Seu nome </h3>    
        <p>Digite seu nome :</p>
        <input type="text" placeholder="Qual é o seu nome ? " onChange={(e)=>setNome(e.target.value)}/>
        </div>
    )
}
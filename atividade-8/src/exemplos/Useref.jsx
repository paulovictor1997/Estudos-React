import { useState, useEffect, useRef} from "react";
import "../App.css";

function Useref() {
const [count,setCount] = useState(0);
const [number,setNumber] = useState(0);

const numberRef = useRef(0);
const buttonRef = useRef();
const oldCount = useRef();

// Não renderiza o componente
useEffect(()=>{
    numberRef.current = Math.random();
})

// Referência para elementos DOM
useEffect(()=>{
    console.log(buttonRef.current.click());
},[])

// Referência ao valor anterior
useEffect(()=>{
    oldCount.current = count;
},[count])

  return (
    <div className="App">
        <h3>Exemplo useRef</h3>
        <h4>O number é : {number}</h4>
        <h4>O número anterior do era : {oldCount.current}</h4>
        <h4>O contador é : {count}</h4>
        <button
        ref={buttonRef} 
        onClick={()=> setCount((prevCount)=> prevCount + 1)}>Adicionar</button>
          <h4>O número do useRef é : {numberRef.current }</h4>
    </div>
  )
}

export default Useref
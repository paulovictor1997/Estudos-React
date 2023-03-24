import { useState } from 'react';
import './App.css';

function App() {
  /* Como funciona o state 
    1 - visualiza o valor.
    2 - alterar o valor.
  */

  const [valor, setValor] = useState("");

  const handleChange = (event) =>{
    //console.log(event.target.value)
    setValor(event.target.value)
  }

  return (
    <div className="App">
      <h1>Pegando valor do input com React</h1>
      <input type="text" onChange={handleChange} />
      <p>{valor}</p>
    </div>
  )
}

export default App

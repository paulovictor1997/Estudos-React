import './App.css'

import {useState} from "react";
import Effect from './exemplos/Effect';

//USESTATE - Gerenciar o estado de algum valor. Alterando ou consultando.

function App() {
  const [name,setName] = useState("Paulo");
  const [number,setNumber] = useState(1);

  const changeNumber = ()=>{
    setNumber(number + 1);
    //previus value (caso queira para mudar o estado de dois em dois)
    /* 
      setNumber((prevNumber) => prevNumber + 1);
      setNumber((prevNumber) => prevNumber + 1);
    */
  }

  return (
    <div className="App">
      <h2>Meu nome é : {name}</h2>
      <input type="text" 
      value={name}
      onChange = {(e)=> setName(e.target.value)}
      />
      <div>
        <p>Number : {number} </p>
        <button onClick={changeNumber}>Mudar número</button>
      </div>

      <div>
        <Effect/>
      </div>
      
    </div>
  )
}

export default App

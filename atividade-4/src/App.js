import './App.css';
import Name from './Componentes/Name';
import Lista from './Componentes/Lista';
import Evento from './Componentes/Eventos';
import Form from './Componentes/Forms';
import Condiocional from './Componentes/Condicional';
//import MinhaLista from './Componentes/MinhaLista';
import SeuNome from './Componentes/StateLift/SeuNome';
import Saudacao from './Componentes/StateLift/Saudacao';

import { useState } from "react"

function App() {
  //Exemplo do  State Lift
  const [nome,setNome] = useState()
  

  return (
    <div className="App">
        <Name nome = 'Paulo Victor' data = '1997' idade = '25'/>
        <Lista/>
        <Evento/>
        <Form/>
        <Condiocional/>
        <SeuNome setNome={setNome}/>
        <Saudacao nome={nome}/>
        
    </div>
  );
}

export default App;


/*
 const name = 'Paulo Victor';

  function soma(a,b){
    return a + b
  }

  return (
    <div className="App">
      <h4>TESTANDO NOVAMENTE ALGUNS COMANDOS</h4>
      <p>Olá {name}, seja bem Vindo</p>
      <p>Soma é : {soma(1,2)}</p>
    </div>
  );

  const Meusitens = ['React','Vue','Angular']
   return (
    <div className="App">
        <Name nome = 'Paulo Victor' data = '1997' idade = '25'/>
        <Lista/>
        <Evento/>
        <Form/>
        <Condiocional/>
        <MinhaLista itens={Meusitens}/>
        <SeuNome setNome={setNome}/>
        <Saudacao nome={nome}/>
        
    </div>
  );

*/
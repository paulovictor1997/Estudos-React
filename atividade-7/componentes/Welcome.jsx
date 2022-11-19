import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import Cavaleiros from '../src/img/cavaleiros-1.jpg';

import "./Welcome.css";

export const Welcome = () => {
  const [quizState,dispatch] = useContext(QuizContext); 

  return (
    <div id='welcome'>
        <h2>Seja bem vindo</h2>
        <button onClick={()=>dispatch({type:"CHANGE_STATE"})}>Iniciar</button>
        <img src={Cavaleiros} alt="Ínicio Quiz" />
    </div>
  )
}

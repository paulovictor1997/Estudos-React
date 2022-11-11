import React from 'react'
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';
import Quiz from "../img/quiz.svg";

import "./Welcome.css";

const Welcome = () => {
 //dispatch - como vai entrar no reducer e executar o switch
  const [quizState,dispatch] = useContext(QuizContext);
  //console.log(quizState);  

  return (
    <div id='welcome'>
        <h2>Seja bem vindo</h2>
        <p>Clique no botão abaixo para começar : </p>
        <button onClick={()=>dispatch({type:"CHANGE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="ínicio do quiz" />
    </div>
  )
}

export default Welcome
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import "./GameOver.css";

export const GameOver = () => {
  const [quizState,dispatch] = useContext(QuizContext)

  return (
    <div id='gameover'>
    <h2>Fim de jogo</h2>
    <p>Pontuação : {quizState.score} </p>
    <p>Você acertou {quizState.score} de {quizState.question.length}{""}</p> 
    <button onClick={()=>dispatch({type:"NEW_GAME"})}>Reiniciar</button> 
</div>
  )
}

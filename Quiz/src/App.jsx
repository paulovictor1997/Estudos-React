import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './componentes/Welcome';
import Question from './componentes/Question';
import { GameOver } from './componentes/GameOver';

import './App.css'


function App() {
  const [quizState,dispatch] = useContext(QuizContext);

  useEffect(()=>{
    //Embaralhar as perguntas
    dispatch({type:"REORDER_QUESTIONS"});
  },[]);
 
  return (
    <div className="App">
     <h1>QUIZ APP</h1>
     {quizState.gameStage === "Start" &&  <Welcome/>}
     {quizState.gameStage === "Playing" && <Question/>}
     {quizState.gameStage === "End" && <GameOver/>}
    </div>
  )
}

export default App

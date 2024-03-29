import {useContext} from 'react';
import { QuizContext } from '../context/quiz';

import {Options} from "./Options";

import './Question.css';

export const Question = () => {
  const [quizState,dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.question[quizState.currentQuestion];
  
  const onSelectOption = (option) =>{
    dispatch({
        type:"CHECK_ANSWER",
        payload:{answer:currentQuestion.answer,option}
    });
  }

  return (
    <div id='question'>
        <p>Pergunta {quizState.currentQuestion +1} de {quizState.question.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div id="options-container">
           {currentQuestion.options.map((option)=>(
           <Options option={option} 
           key={option} 
           answer={currentQuestion.answer}
           selectOption = {()=> onSelectOption(option)}
           />))}
    </div>
        {quizState.answerSelected&&
        (<button onClick={()=>dispatch({type:"CHANGE_QUESTION"})}>
          Continuar
          </button>
        )}
    </div>
  )
}

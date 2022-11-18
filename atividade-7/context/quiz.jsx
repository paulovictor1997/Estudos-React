import { createContext,useReducer } from "react";
import question from "../data/question";

//Estágios do quiz

const STAGES = ["Start","Playing","End"];

const intialState = {
    gameStage:STAGES[0],
    question,
    currentQuestion:0,
    score:0,
    answerSelected:false
};

const quizReducer = (state,action) =>{
     //Switch baseado nas ações
     switch(action.type){
        case "CHANGE_STATE":
            return{
                ...state,
                gameStage:STAGES[1]
            };
        
        case "REORDER_QUESTIONS":
            const reoderedQuestions = question.sort(()=>{
                return Math.random() - 0.5;
             });
            
            return{
                ...state,
                question: reoderedQuestions
            };

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false;
            if(!question[nextQuestion]){
                endGame  = true;
            }

            return{
                ...state,
                currentQuestion:nextQuestion,
                gameStage:endGame ? STAGES[2]:state.gameStage,
                answerSelected:false
            }

        case "NEW_GAME":
            return intialState;
            
        case "CHECK_ANSWER":
            if(state.answerSelected) return state;

            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0;

            if(answer === option) correctAnswer = 1;

            return{
                ...state,
                score:state.score + correctAnswer,
                answerSelected:option
            }
        
        default :
            return state;
     }  
}

export const  QuizContext = createContext();

export const QuizProvider = ({children})=>{
    const value = useReducer(quizReducer,intialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}
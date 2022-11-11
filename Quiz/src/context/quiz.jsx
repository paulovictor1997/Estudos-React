import { createContext, useReducer } from "react";
import questions from "../data/questions";

//Estágios do quiz 
const STAGES = ["Start","Playing","End"];

const initalState = {
    gameStage:STAGES[0],
    questions,
    currentQuestion:0,
    score:0,
    answerSelected:false
};

const quizReducer = (state,action) =>{
    //console.log(state,action)

    //Switch baseado nas ações
    switch(action.type){
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage:STAGES[1]
            };

        case "REORDER_QUESTIONS":
             const reoderedQuestions = questions.sort(()=>{
                return Math.random() - 0.5;
             });

             return{
                ...state,
                questions:reoderedQuestions
             };

        case "CHANGE_QUESTION":
             const nextQuestion = state.currentQuestion + 1;
             let endGame = false;
             if(!questions[nextQuestion]){
                endGame = true;
             }

             return{
                ...state,
                currentQuestion:nextQuestion,
                gameStage:endGame ? STAGES[2]:state.gameStage,
                answerSelected:false
             };

        case "NEW_GAME":
            return initalState;

        case "CHECK_ANSWER":
            //console.log(action);
            if(state.answerSelected) return state; 

            const answer = action.payload.answer
            const option = action.payload.option
            let correctAnswer = 0

            if(answer === option) correctAnswer = 1;

            return{
                ...state,
                score:state.score + correctAnswer,
                answerSelected:option
            }

        default:
            return state;
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({children})=>{
    const value = useReducer(quizReducer,initalState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}
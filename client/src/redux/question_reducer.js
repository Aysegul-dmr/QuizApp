import { createSlice } from "@reduxjs/toolkit"

export const questionReducer = createSlice({
    name:"questions",
    initialState:{
        queue:[],
        answers:[],
        trace:0,
        number:0,
    },
    reducers:{
        startExamAction:(state,action)=>{
            let {question,answers}=action.payload
            let filteredQuestions=[];
            let filteredAnswers=[];
            if(state.number && state.number > 0){
                for(let i=0;i<state.number;i++){
                    const random=Math.floor(Math.random()*question.length)
                    filteredQuestions.push(question[random])
                    filteredAnswers.push(answers[random])
                    question.toSpliced(random,1)
                }
                return {
                    ...state,
                    queue:filteredQuestions,
                    answers:filteredAnswers
                }
            }else{
                return {
                    ...state,
                    queue:question,
                    answers
                }
            }
        },
        moveNextAction:(state)=>{
            return {...state,trace:state.trace + 1}
        },
        movePrevAction:(state)=>{
            return {...state,trace:state.trace - 1}
        },
        resetAllAction:()=>{
            return {
                queue:[],
                answers:[],
                trace:0
            }
        },
        setNumber:(state,action)=>{
            state.number=action.payload;
        }
    }
})

export const {startExamAction,moveNextAction,movePrevAction,resetAllAction,setNumber} = questionReducer.actions;

export default questionReducer.reducer
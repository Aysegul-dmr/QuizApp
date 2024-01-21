import { useState,useEffect} from "react"
import { useDispatch } from "react-redux"
import {moveNextAction, movePrevAction, startExamAction} from "../redux/question_reducer"
import { getServerData } from "../helper/helper"

export const useFetchQuestion=()=>{
    const dispatch=useDispatch()
    const [getData,setGetData]=useState({isLoading:false,apiData:[],serverError:null})
    
    useEffect(()=>{
        setGetData(prev => ({...prev, isLoading:true}));
        (async()=>{
            try {
                const [{questions,answers}]=await getServerData(`${import.meta.env.VITE_SERVER_HOST}/api/questions`,(data)=> data)
                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading:false}))
                    setGetData(prev => ({...prev, apiData:questions}))
                    dispatch(startExamAction({question:questions,answers}))
                }else{
                    throw new Error("No Question Available")
                }
            } catch (error) {
                setGetData(prev => ({...prev, isLoading:false}))
                setGetData(prev => ({...prev,serverError:error}))
            }
        })();
    },[dispatch])

    return [getData,setGetData];
}

export const moveNextQuestion = ()=> async (dispatch)=>{
    try {
        dispatch(moveNextAction())
    } catch (error) {
        console.log(error)
    }
}

export const movePrevQuestion = ()=> async (dispatch)=>{
    try {
        dispatch(movePrevAction())
    } catch (error) {
        console.log(error)
    }
}
import React, { useEffect, useState } from 'react'
import Questions from './Questions'
import {useSelector,useDispatch} from "react-redux"
import { moveNextQuestion, movePrevQuestion } from '../hooks/FetchQuestion';
import { pushAnswer } from '../hooks/setResult';
import { Navigate } from 'react-router-dom';

const Quiz = () => {
    const dispatch =useDispatch();
    const {trace,queue}= useSelector(state=>state.questions)
    const [check,setCheck]=useState(undefined)
    const result =useSelector(state=>state.result.result)
   
    const onNext=()=>{
        if(trace < queue.length){
            dispatch(moveNextQuestion())
           if(result.length <= trace){
            dispatch(pushAnswer(check))
           }
        }
        setCheck(undefined)
    }
    const onPrev=()=>{
        console.log('On prev Click')
        if(trace > 0){
            dispatch(movePrevQuestion())
        }
        
    }
    const onChecked=(check)=>{
        console.log(check)
        setCheck(check)
    }
    if(result.length && result.length >= queue.length ){
        return <Navigate to={'/result'} replace="true"></Navigate>
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>
        {/* display question*/}
        <Questions onChecked={onChecked}/>
        <div className='grid'>
            { trace >0 ? <button className='btn prev' onClick={onPrev}>Prev</button>: <div></div>}
            <button className='btn next' onClick={onNext}>Next</button>
            
        </div>
    </div>
  )
}

export default Quiz
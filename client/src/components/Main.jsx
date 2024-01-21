import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import "../styles/Main.css"
import { useDispatch } from 'react-redux';
import { setUserId } from '../redux/result_reducer';
import { setNumber } from '../redux/question_reducer';

const Main = () => {
    const dispatch=useDispatch()
    const inputRef = useRef();
    const startQuiz=()=>{
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }
    const [questionNumber,setQuestionNumber]=useState()
    const handleQuestionNumber = (e) =>{
        if(e.target.value == 0){
            setQuestionNumber()
        }
        if(e.target.value <= 20 && e.target.value >= 0){
            setQuestionNumber(e.target.value)
        }
        
    }
    useEffect(()=>{
        dispatch(setNumber(questionNumber))
    },[questionNumber])

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz App.com</h1>
        <ol>
            <li>Seçtiğiniz soru sayısı adedince soru size sorulacaktır</li>
            <li>Doğru cevaba 10 puan verilir.</li>
            <li>Her sorunun üç seçeneği vardır. Yalnızca bir seçeneği seçebilirsiniz.</li>
            <li>Sınav bitmeden cevapları inceleyebilir ve değiştirebilirsiniz.</li>
            <li>Sonuç sınav sonunda açıklanacaktır.</li>
        </ol>

        <form id="form">
            <input ref={inputRef} className='userid' type="text" placeholder='Kullanıcı Adı' />
            <input className='userid' type="text" value={questionNumber}  onChange={handleQuestionNumber} placeholder='Soru sayısını girin (En fazla 20 soru seçebilirsiniz)' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div>

    </div>
  )
}

export default Main
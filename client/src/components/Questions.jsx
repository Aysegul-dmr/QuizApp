import React, { useEffect, useState } from "react";
import { useFetchQuestion } from "../hooks/FetchQuestion";
import { useDispatch, useSelector } from "react-redux";

import { updateResult } from "../hooks/setResult";

const Questions = ({onChecked}) => {
    const dispatch=useDispatch()
  const [checked, setChecked] = useState(undefined);
  const {trace}=useSelector(state=>state.questions)
  const result=useSelector(state=>state.result.result)
  const [{isLoading,apiData,serverError},setGetData]=useFetchQuestion()
  const questions = useSelector(state=>state.questions.queue[state.questions.trace])
    useSelector(state=>console.log(state))
  useEffect(() => {
    dispatch(updateResult({trace,checked}))
  },[checked]);

  const onSelect = (i) => {
    
    onChecked(i) 
    setChecked(i)
    dispatch(updateResult({trace,checked}))
  };

  if (isLoading) return <h3 className="text-light"> isLoading</h3>
  if (serverError) return <h3 className="text-light">{serverError || "Unknown Error"}</h3>

  return (
    <div className="questions">
      <h2 className="text-light">{questions?.question}</h2>
      <ul key={questions?.id}>
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              name="options"
              id={`q${i}-option`}
              onChange={()=> onSelect(i)}
            />
            <label className="text-primary" htmlFor={`q${i}-option`}>
             {q}
            </label>
            <div className={`check ${result[trace] ==  i ? 'checked' : ''} `}></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;

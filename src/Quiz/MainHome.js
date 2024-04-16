import React, { useEffect, useState } from 'react';
import axios from "axios"
import Textbox from '../ValidationForm/Textbox';
import Button from './Button';

function MainHome() {
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [correctAns, setCorrectAns] = useState({})


  const [userAnswers, setUserAnswers] = useState([]);

  // Include an empty dependency array to ensure useEffect runs only once



  const fetchData = () => {
    axios.get('https://mocki.io/v1/64b12a4b-1d40-45df-97b2-beaf9270d332')
      .then((response) => {
        const correctAnswer = response.data.slice(0, 5).map((index) => (index.correct_answer))
        setCorrectAns(correctAnswer);
        setData(response.data)
      })
      .catch((error) => {
        // Code for handling the error
        console.log(error)

      })
  };
  const onChange = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer })
  }
  const checkAnswers = () => {
    const result = {};
   Object.keys(answers).forEach((index) => {
      const userAnswer = answers[index];
      const correctAnswer = correctAns[index];
      const isCorrect = userAnswer === correctAnswer;

      result[index] = isCorrect ? 'correct' : 'wrong';
    });

    setUserAnswers(result);
  };


  const handeSubmit = () => {
    console.log(correctAns, answers)
    
  }

  useEffect(() => {

    fetchData();
    checkAnswers()
  }, [answers]);

  return (
    <div>

      <p>tejinder</p>
      {data.slice(0, 5).map((question, index) => (
        <div key={index}>

          <p>Question: {question.question}</p>

          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <label>{option}</label>
              <Textbox type="radio"
                name={index}
                value={option}
                checked={answers[index] === option}
                onChange={() => onChange(index, option)} />
            </div>
          ))}
          {answers[index] ? (<div><p>Selected Answer: {answers[index]} </p> <p>{question.correct_answer}</p>  <p style={{ color: userAnswers[index] === 'correct' ? 'green' : 'red' }}>
    {userAnswers[index]}
  </p>
          </div>
          ) : (<p>Not defined</p>
          )}

        </div>
      ))}
      <Button onSubmit={handeSubmit} button="submit" />
    </div>
  );
}

export default MainHome;

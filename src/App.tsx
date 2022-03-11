import React, { useState } from 'react';

import QuestionCard from './components/QuestionCard';
import { fetchQuizQuestions } from "./API"
import { Difficulty } from './API'

const TOTAL_QUESTIONS = 10

function App() {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.HARD));



  const startTrivia = async () => {


  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {


  }

  const nextQuestion = () => {

  }

  return (
    <div>
      <h1>React Quiz</h1>
      <button className='start' onClick={startTrivia}>Start</button>
      <p className='score'>Score:</p>
      <p>Loading Questions...</p>
      {/*<QuestionCard
        questionNbr={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}*/}

      {/*/>*/}
      <button className='next'>Next Question</button>

    </div>
  );
}

export default App;

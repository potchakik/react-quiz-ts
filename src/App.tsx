import React from 'react';

import QuestionCard from './components/QuestionCard';

function App() {

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
      <QuestionCard />
      <button className='next'>Next Question</button>

    </div>
  );
}

export default App;

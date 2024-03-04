import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [answer, setAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(10);
  const [isTimeUp, setIsTimeUp] = useState(false);

  const handleAnswerChange = (event) => {
    event.preventDefault()
    setAnswer(event.target.value);
  };

  const checkAnswer = () => {
    if (answer.toLowerCase() === "paris") {
      clearTimeout();
      alert("Correct!");
    } else {
      alert("Incorrect! Try again.");
    }
  };

  const showAnswer = () => {
    setIsTimeUp(true);
    setAnswer("Paris");
    alert("Time's up! The answer is Paris.");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft === 0) {
        showAnswer();
        clearInterval(timer);
      } else {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="quiz-container">
      <div className="question">Fill in the blank: _ _is the capital of France.</div>
      <input type="text" value={answer} onChange={handleAnswerChange} disabled={isTimeUp} />
      <button onClick={checkAnswer} disabled={isTimeUp}>Submit</button>
      <div className="timer">Time remaining: {timeLeft} seconds</div>
    </div>
  );
};

export default Quiz;

import React from 'react';

const QuizResult = ({ result, retry }) => {
  return (
    <div className='result-screen'>
      <h2>Result: {result.percentage}%</h2>
      <p>Selected {result.correct} correct option out of {result.total} questions.</p>
      {result.percentage === 100 ? (
        <p>Congratulations! You got all the answers correct!</p>
      ) : result.correct === 0 ? (
        <p>Oops! You didn't get any answers correct. Try again!</p>
      ) : (
        <p>Keep practicing to improve your score!</p>
      )}
      <button onClick={retry}>Retry</button>
    </div>
  );
};

export default QuizResult;

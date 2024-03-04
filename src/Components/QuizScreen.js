import React, { useState } from "react";
import QuizResult from "./QuizResult.js";
import Question from "./Question.js";
import QuesAns from "../data/QuesAns.json";

const QuizScreen = ({ retry }) => {
  const [curQuesInd, setCurQuesInd] = useState(0);
  const [markAns, setMarkAns] = useState(new Array(QuesAns.length).fill(null));
  const isQuesEnd = curQuesInd === QuesAns.length;

  function calculateResult() {
    let correct = 0;
    QuesAns.forEach((question, index) => {
      if (question.correctOptionIndex === markAns[index]) {
        correct++;
      }
    });
    return {
      total: QuesAns.length,
      correct: correct,
      percentage: Math.trunc((correct / QuesAns.length) * 100),
    };
  }

  return (
    <div className="quiz-screen">
      {isQuesEnd ? (
        <QuizResult result={calculateResult()} retry={retry} />
      ) : (
        <Question
          question={QuesAns[curQuesInd]}
          totalQuestion={QuesAns.length}
          curQuestion={curQuesInd + 1}
          setAnswer={(index) => {
            setMarkAns((arr) => {
              let newArr = [...arr];
              newArr[curQuesInd -1] = index; 
              return newArr;
            });
            setCurQuesInd(curQuesInd + 1);
          }}
        />
      )}
    </div>
  );
};

export default QuizScreen;

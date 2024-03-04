import React, { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";

const Question = ({ question, totalQuestion, curQuestion, setAnswer }) => {
  const [selectOption, setSelectOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  function gotoNextQuestion() {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => {
      setAnswer(selectOption);
    });
    setSelectOption(null);
  }

  useEffect(() => {
    progressBar.current.classList.remove("active");
    setTimeout(() => {
      progressBar.current.classList.add("active");
    }, 0);
    timer.current = setTimeout(gotoNextQuestion, 10 * 1000);
    return gotoNextQuestion;
  }, [question]);

  return (
    <div className="question">
      <div className="progress-bar" ref={progressBar}></div>
      <div className="question-count">
        <b>{curQuestion}</b>
        <span>of</span>
        <b>{totalQuestion}</b>
      </div>
      <div className="main">
        <div className="title">
          <span>Question :</span>
          <p>{question.title}</p>
        </div>
        <div className="options">
          {question.options.map((option, index) => {
            return (
              <div
                className={index === selectOption ? "option active" : "option"}
                key={index}
                onClick={() => setSelectOption(index)}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
      <div className="control">
        <button onClick={gotoNextQuestion}>Next</button>
      </div>
    </div>
  );
};

export default Question;

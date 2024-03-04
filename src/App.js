import React, { useState } from "react";

import QuizScreen from './Components/QuizScreen.js'
import JoinScreen from './Components/JoinScreen.js'
import Navbar from "./Components/Navbar.js";

const App = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  return (
    <>
      <Navbar />
      <div className="quiz-container">
        {isQuizStarted ? (
          <QuizScreen retry={() => setIsQuizStarted(false)} />
        ) : (
          <JoinScreen start={() => setIsQuizStarted(true)} />
        )}
      </div>
    </>
  );
};

export default App;

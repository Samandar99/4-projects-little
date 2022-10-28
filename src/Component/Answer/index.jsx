import React from "react";
import "./style.css";

const Answer = ({ AgainHandler, questionsCount, correctAnswers }) => {
  return (
    <div className="AnswerModal">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        width={150}
        height={150}
        alt="Celebration"
      />
      <p className="answerText">
        you are guessed {correctAnswers} answer in
        <span> {questionsCount}</span>
      </p>
      <button onClick={AgainHandler} className="fon1">
        try again
      </button>
    </div>
  );
};

export default Answer;

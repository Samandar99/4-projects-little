import React from "react";
import "./style.css";

const Ask = ({ question, sectionHandler, questionsCount }) => {
  return (
    <div className="ask-wrap">
      <div className="draw">
        <div
          className="color"
          style={{ width: `${question.id * (100 / questionsCount)}%` }}
        ></div>
      </div>
      <h3 className="title">{question.title}</h3>
      <div className="boxButton">
        {question.variants.map((variant) => (
          <button
            className="btn one"
            key={variant}
            onClick={() => sectionHandler(variant, question.correctAnswer)}
          >
            {variant}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Ask;

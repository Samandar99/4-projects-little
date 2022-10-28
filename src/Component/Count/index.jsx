import React, { useState } from "react";
import "./count.css";
const Count = () => {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    if (count === 0) {
      return;
    }

    setCount(count - 1);
  };

  return (
    <div className="box">
      <p> Count:</p>
      <b className="counter">{count}</b>
      <div>
        <button className="minus-button" onClick={minus}>
          minus
        </button>
        <button className="plus-button" onClick={plus}>
          plus
        </button>
      </div>
    </div>
  );
};

export default Count;

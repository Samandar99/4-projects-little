import React from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// https://reqres.in/api/users

const Success = ({ sentHandler, invite }) => {
  return (
    <div className="S-wrap">
      <div className="block">
        <div className="success-icon">
          <FontAwesomeIcon className="check" icon={faCheck}></FontAwesomeIcon>
        </div>
        <b className="suc">Successfully</b>
        <p className="text-and">
          successfully sent to all users {invite.length}
        </p>

        <button className="back" onClick={sentHandler}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Success;

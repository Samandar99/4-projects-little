import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./modal.css";
const Modal = () => {
  const [modal, setModal] = useState(true);
  // const [closed, setClosed] = useState(true);
  const openModalHandler = () => {
    setModal(!modal);
  };

  return (
    <div>
      {modal ? (
        <div className="Modal" onClick={openModalHandler}>
          <p className="ps">Open window</p>
        </div>
      ) : (
        <div className="Open">
          <FontAwesomeIcon
            onClick={openModalHandler}
            icon={faClose}
            className="closed"
          />

          <div className="m-texts">
            <b className="m-text">Hey !</b>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

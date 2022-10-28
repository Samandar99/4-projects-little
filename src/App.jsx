import React, { useState, useEffect } from "react";
import Answer from "./Component/Answer";
import Ask from "./Component/Ask";
import Count from "./Component/Count";
import Modal from "./Component/Modal";
import Success from "./Component/Success";
import UserList from "./Component/UsersList/";

const questions = [
  {
    id: 0,
    title: "React - is ...",
    correctAnswer: "FrameWork",
    variants: ["BookStorage", "FrameWork", "Applications"],
  },
  {
    id: 1,
    title: "Component - is ...",
    correctAnswer: "Page",
    variants: ["Application", "Page", "I don't know"],
  },
  {
    id: 2,
    title: "What is JSX?",
    correctAnswer: "BookStorage",
    variants: ["BookStorage", "FrameWork", "Applications"],
  },
];

const App = () => {
  const [count, setCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [correctAnswers, setCorrectAnswer] = useState(0);
  const [success, setSuccess] = useState(false);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [invite, setInvite] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setUsers(data.data);
          setFilteredUsers(data.data);
        }, 1000);
      });
  }, []);

  useEffect(() => {
    const filtered = users.filter((item) =>
      item.first_name.toLowerCase().includes(inputValue.toLowerCase())
    );

    setFilteredUsers(filtered);
  }, [inputValue]);

  const sectionHandler = (variant, correctAnswer) => {
    if (variant === correctAnswer) {
      setCorrectAnswer(correctAnswers + 1);
    }

    if (count === questions.length - 1) {
      setFinished(true);
      return;
    }

    setCount(count + 1);
  };

  const AgainHandler = () => {
    setFinished(false);
    setCount(0);
    setCorrectAnswer(0);
  };

  const sentHandler = () => {
    setSuccess(!success);
  };

  const findUserHandler = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const inviteHandler = (id) => {
    // let mas = invite.filter((itme, index) => invite.indexOf(itme) === index);

    const result = invite.find((item) => item === id);

    if (result) {
      const filtered = invite.filter((item) => item !== id);

      setInvite(filtered);
    } else {
      setInvite([...invite, id]);
    }
  };

  return (
    <div>
      <Count />
      <Modal />
      {finished ? (
        <Answer
          correctAnswers={correctAnswers}
          AgainHandler={AgainHandler}
          questionsCount={questions.length}
        />
      ) : (
        <Ask
          question={questions[count]}
          sectionHandler={sectionHandler}
          questionsCount={questions.length}
        />
      )}

      {success ? (
        <Success sentHandler={sentHandler} invite={invite} />
      ) : (
        <UserList
          users={filteredUsers}
          sentHandler={sentHandler}
          findUserHandler={findUserHandler}
          inviteHandler={inviteHandler}
          invite={invite}
        />
      )}
    </div>
  );
};

export default App;

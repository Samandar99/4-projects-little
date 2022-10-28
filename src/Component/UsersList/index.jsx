import React from "react";
import "./style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Skleton from "../Skleton";

const UserList = ({
  sentHandler,
  users,
  findUserHandler,
  inviteHandler,
  invite,
}) => {
  return (
    <div className="U-wrap">
      <div className="search">
        <FontAwesomeIcon icon={faSearch} className="tep"></FontAwesomeIcon>
        <input
          onChange={findUserHandler}
          className="inputSearch"
          type="text"
          placeholder="Find User..."
        />
      </div>

      {users.length
        ? users.map((item, idx) => (
            <div className="searchBox" key={idx}>
              <img className="fotoUser" src={item.avatar} alt="" />

              <div className="userName">
                <b>{item.first_name}</b>
                <p className="gmail">{item.email}</p>
              </div>

              <div className="add">
                <span
                  className="addedUser"
                  onClick={() => inviteHandler(item.id)}
                >
                  {invite.includes(item.id) ? "-" : "+"}
                </span>

                {/* <span className="addedUser">-</span> */}
              </div>
            </div>
          ))
        : Array.from({ length: 5 }).map((item, i) => (
            <div className="fon" key={i}>
              <Skleton />
            </div>
          ))}

      {invite.length > 0 ? (
        <button onClick={sentHandler} className="button">
          send invitations
        </button>
      ) : null}
    </div>
  );
};

export default UserList;

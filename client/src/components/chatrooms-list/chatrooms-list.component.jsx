import React from "react";

import "./chatrooms-list.styles.scss";

const ChatRooms = () => {
  const chatrooms = [
    {
      name: "lets_chat",
    },
    {
      name: "memes_here_plis",
    },
    {
      name: "boredom_room",
    },
  ];

  const handleClick = () => {
    console.log("chatroom clicked");
  };

  return (
    <>
      <div className="server-name">Pida Inducing Group</div>
      <div className="chatrooms">
        <ul className="chatrooms-list">
          {chatrooms.map((chatroom, index) => (
            <li className="chatrooms-list-chatroom" key={index}>
              <button
                className="chatrooms-list-chatroom-name"
                onClick={handleClick}
              >
                {chatroom.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="user">Braxton</div>
    </>
  );
};

export default ChatRooms;

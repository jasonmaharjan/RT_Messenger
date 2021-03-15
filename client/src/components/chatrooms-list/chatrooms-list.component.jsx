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
    <section className="chatrooms">
      <div className="server-name">Pida Inducing Group</div>
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
    </section>
  );
};

export default ChatRooms;

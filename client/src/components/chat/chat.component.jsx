import React from "react";
import "./chat.styles.scss";

const Chat = () => {
  const chatHistory = [
    {
      displayName: "SojhoKto",
      message: "Yalllo everyone what is up?",
    },
    {
      displayName: "PogMaster",
      message: "Yalo yalo nothin much just chillin",
    },
    {
      displayName: "SojhoKto",
      message: "Valorant kheldai cha koi?",
    },
  ];

  return (
    <>
      <div className="chatroom-name">ssg_study_room</div>
      <div className="chat">
        <ul className="chat-history">
          {chatHistory.map((chat, index) => (
            <li className="chat-history-content" key={index}>
              <div className="chat-history-content-user-img">O</div>

              <div className="chat-history-content-container">
                <div className="chat-history-content-container-display-name">
                  {chat.displayName}
                </div>
                <div className="chat-history-content-container-message">
                  {chat.message}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="message-box">
        <input
          className="message-box-input"
          placeholder="Type a message here"
        />
      </div>
    </>
  );
};

export default Chat;

import React from "react";

import ServerCol from "../../components/servers-list/servers-list.component";
import ChatRoomCol from "../../components/chatrooms-list/chatrooms-list.component";

import "./chat.styles.scss";

const Chat = () => {
  return (
    <section className="content-chat">
      <div className="server-container">
        <ServerCol />
      </div>

      <div className="chatroom-container">
        <ChatRoomCol />
      </div>

      <div className="chat-container">chat</div>
      <div className="members-container">members</div>
    </section>
  );
};

export default Chat;

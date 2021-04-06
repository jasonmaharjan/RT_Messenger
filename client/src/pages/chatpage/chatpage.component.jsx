import React, { useEffect } from "react";

import ServerCol from "../../components/servers-list/servers-list.component";
import ChatRoomCol from "../../components/chatrooms-list/chatrooms-list.component";
import ChatCol from "../../components/chat/chat.component";
import MembersCol from "../../components/members/members.component";

import { chatPage } from "../../axios";

import "./chatpage.styles.scss";

const ChatPage = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    chatPage(token); // check validity of token
  }, []);

  return (
    <section className="content-chat">
      <div className="server-container">
        <ServerCol />
      </div>

      <div className="chatroom-container">
        <ChatRoomCol />
      </div>

      <div className="chat-container">
        <ChatCol />
      </div>

      <div className="members-container">
        <MembersCol />
      </div>
    </section>
  );
};

export default ChatPage;

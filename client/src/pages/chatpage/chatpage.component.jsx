import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToggle } from "../../redux/server/server.selectors";

import ServerCol from "../../components/servers-list/servers-list.component";
import ChatRoomCol from "../../components/chatrooms-list/chatrooms-list.component";
import ChatCol from "../../components/chat/chat.component";
import MembersCol from "../../components/members/members.component";

import CreateServer from "../../components/dialog-box/createServer.component";

import { chatPage } from "../../axios";

import "./chatpage.styles.scss";

const ChatPage = ({ toggleFlag }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    chatPage(token); // check validity of token
  }, []);

  return (
    <section className="content-chat">
      {toggleFlag ? <CreateServer /> : null}
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

const MapStateToProps = createStructuredSelector({
  toggleFlag: selectToggle,
});

export default connect(MapStateToProps)(ChatPage);

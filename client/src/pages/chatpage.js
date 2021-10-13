import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToggle } from "../redux/server/server.selectors";

import ServerCol from "../components/servers-list";
import ChatRoomCol from "../components/chatroomsList";
import ChatCol from "../components/chat";
import MembersCol from "../components/members";

import CreateServer from "../components/createServer.component";

import { chatPage } from "../api/axios";

import {
  ChatPageContainer,
  ServerListContainer,
  ChatRoomsContainer,
  ChatContainer,
  MembersContainer,
} from "../styles/Container";

const ChatPage = ({ toggleFlag }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    chatPage(token); // check validity of token
  }, []);

  return (
    <ChatPageContainer>
      {toggleFlag ? <CreateServer /> : null}
      <ServerListContainer>
        <ServerCol />
      </ServerListContainer>

      <ChatRoomsContainer>
        <ChatRoomCol />
      </ChatRoomsContainer>

      <ChatContainer>
        <ChatCol />
      </ChatContainer>

      <MembersContainer>
        <MembersCol />
      </MembersContainer>
    </ChatPageContainer>
  );
};

const MapStateToProps = createStructuredSelector({
  toggleFlag: selectToggle,
});

export default connect(MapStateToProps)(ChatPage);

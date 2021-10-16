import React from "react";

import {
  ServerName,
  ChatRoomBtn,
  ChatRoomEntry,
  ChatRoomList,
  UserRow,
  UserName,
  IconDiv,
} from "../styles/ChatRoomsCol";

import { MembersImage, MembersStatus } from "../styles/MembersCol";
import { SettingsIcon } from "../styles/SettingsIcon.js";

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
    {
      name: "super secret",
    },
  ];

  const handleClick = () => {
    console.log("chatroom clicked");
  };

  const handleSettingsClicked = () => {
    // open modal to edit settings
  };

  return (
    <>
      <ServerName>Pida Inducing Group</ServerName>

      <ChatRoomList>
        {chatrooms.map((chatroom, index) => (
          <ChatRoomEntry key={index}>
            <ChatRoomBtn onClick={handleClick}>{chatroom.name}</ChatRoomBtn>
          </ChatRoomEntry>
        ))}
      </ChatRoomList>

      <UserRow>
        <MembersImage status="online">
          <MembersStatus status="online" />
        </MembersImage>
        <UserName>Braxton</UserName>
        <IconDiv>
          <SettingsIcon onClick={handleSettingsClicked} />
        </IconDiv>
      </UserRow>
    </>
  );
};

export default ChatRooms;

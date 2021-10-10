import React from "react";

import {
  ServerName,
  ChatRoomBtn,
  ChatRoomEntry,
  ChatRoomList,
  UserRow,
  UserName,
  UserStatus,
} from "../styles/ChatRoomsCol";

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
      name: "super secret group",
    },
  ];

  const handleClick = () => {
    console.log("chatroom clicked");
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
        <UserName>Braxton</UserName>
        <UserStatus />
      </UserRow>
    </>
  );
};

export default ChatRooms;

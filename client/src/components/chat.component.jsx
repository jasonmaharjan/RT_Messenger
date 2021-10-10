import React from "react";

import {
  ChatRoom,
  ChatContainer,
  ChatEntry,
  UserImage,
  ChatEntryContent,
  DisplayName,
  MessageBox,
  MessageBoxInput,
  ChatMessage,
} from "../styles/ChatCol";

const Chat = () => {
  const chatHistory = [
    {
      displayName: "SojhoKto",
      message:
        "Yalllo everyone what is up? Yalllo everyone what is up? Yalllo everyone what is up? Yalllo everyone what is up? Yalllo everyone what is up?",
    },
    {
      displayName: "PogMaster",
      message: "Yalo yalo nothin much just chillin",
    },
    {
      displayName: "SojhoKto",
      message: "Valorant kheldai cha koi?",
    },
    {
      displayName: "PogMaster",
      message: "Yalo yalo nothin much just chillin",
    },
    {
      displayName: "SojhoKto",
      message: "Valorant kheldai cha koi?",
    },
    {
      displayName: "PogMaster",
      message: "Yalo yalo nothin much just chillin",
    },
    {
      displayName: "SojhoKto",
      message: "Valorant kheldai cha koi?",
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
      <ChatRoom>ssg_study_room</ChatRoom>
      <ChatContainer>
        {chatHistory.map((chat, index) => (
          <ChatEntry key={index}>
            <UserImage />
            <ChatEntryContent>
              <DisplayName>{chat.displayName}</DisplayName>
              <ChatMessage>{chat.message}</ChatMessage>
            </ChatEntryContent>
          </ChatEntry>
        ))}
      </ChatContainer>
      <MessageBox>
        <MessageBoxInput placeholder="Type a message here" />
      </MessageBox>
    </>
  );
};

export default Chat;

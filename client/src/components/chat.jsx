import React, { useState, useEffect } from "react";

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
  SkeletonUserImage,
  SkeletonDisplayName,
  SkeletonChatMessage,
} from "../styles/ChatCol";

const Chat = () => {
  const chatHistory = [
    {
      displayName: "SojhoKto",
      message:
        "Yalllo everyone what is up? Yalllo everyone what is up? Yalllo everyone what is up? Yalllo everyone what is up? Yalllo everyone what is up? Yalllo everyone what is up? Yalllo everyone what is up? Yalllo everyone what is up? Yalllo everyone what is up?",
    },
    {
      displayName: "PogMaster",
      message:
        " Yalo yalo nothin much just chillinYalo yalo nothin much just chillinYalo yalo nothin much just chillinYalo yalo nothin much just chillinYalo yalo nothin much just chillinYalo yalo nothin much just chillinYalo yalo nothin much just chillinYalo yalo nothin much just chillinYalo yalo nothin much just chillinYalo yalo nothin much just chillin",
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

  const skeletonChatHistory = new Array(7).fill(null);

  const [isLoaded, setIsLoaded] = useState(false);

  // api call to get the chat history array
  useEffect(() => {
    // skeleton loader
    setTimeout(() => setIsLoaded(true), 1000);
  }, []);
  return (
    <>
      <ChatRoom>ssg_study_room</ChatRoom>
      <ChatContainer>
        {isLoaded
          ? chatHistory.map((chat, index) => (
              <ChatEntry key={index}>
                <UserImage />
                <ChatEntryContent>
                  <DisplayName>{chat.displayName}</DisplayName>
                  <ChatMessage>{chat.message}</ChatMessage>
                </ChatEntryContent>
              </ChatEntry>
            ))
          : skeletonChatHistory.map((dummy, index) => (
              <ChatEntry key={index}>
                <SkeletonUserImage />
                <ChatEntryContent>
                  <SkeletonDisplayName />
                  <SkeletonChatMessage style={{ width: "30vw" }} />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "20vw",
                    }}
                  >
                    <SkeletonChatMessage />
                    <SkeletonChatMessage />
                    <SkeletonChatMessage />
                  </div>
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

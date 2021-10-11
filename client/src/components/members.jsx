import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import {
  MembersTitle,
  MembersContainer,
  MembersList,
  MembersImage,
  MembersListContainer,
  MembersName,
  MembersStatus,
  SkeletonMembersImage,
  SkeletonMembersName,
} from "../styles/MembersCol";

const Members = () => {
  const members = [
    {
      displayName: "SojhoKto",
      avatar: "0",
      status: "online",
    },
    {
      displayName: "PogMaster",
      avatar: "1",
      status: "offline",
    },
    {
      displayName: "Apex Ashish",
      avatar: "2",
      status: "offline",
    },

    {
      displayName: "Braxton",
      avatar: "0",
      status: "offline",
    },
    {
      displayName: "Biswash",
      avatar: "1",
      status: "online",
    },
  ];

  const skeletonMembers = new Array(4).fill(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // api call to get the members array
  useEffect(() => {
    // skeleton loader
    setTimeout(() => setIsLoaded(true), 1000);
  }, []);

  const onlineMembers = members.filter((member) => member.status === "online");
  const offlineMembers = members.filter(
    (member) => member.status === "offline"
  );

  const theme = {};

  const OnlineMembers = () => {
    if (onlineMembers && onlineMembers.length !== 0) {
      return onlineMembers.map((member, index) => (
        <MembersListContainer key={index}>
          <MembersImage status="online">
            <MembersStatus status="online" />
          </MembersImage>
          <MembersName status="online"> {member.displayName}</MembersName>
        </MembersListContainer>
      ));
    } else return null;
  };

  const OfflineMembers = () => {
    if (offlineMembers && offlineMembers.length !== 0)
      return offlineMembers.map((member, index) => (
        <MembersListContainer key={index}>
          <MembersImage>
            <MembersStatus />
          </MembersImage>
          <MembersName> {member.displayName}</MembersName>
        </MembersListContainer>
      ));
    else return null;
  };

  const SkeletonMembers = () => {
    return skeletonMembers.map((member, index) => (
      <MembersListContainer key={index}>
        <SkeletonMembersImage />
        <SkeletonMembersName />
      </MembersListContainer>
    ));
  };

  return (
    <ThemeProvider theme={theme}>
      <MembersTitle> Members</MembersTitle>
      <MembersContainer>
        <MembersList>
          {isLoaded ? (
            <>
              <OnlineMembers />
              <OfflineMembers />
            </>
          ) : (
            <SkeletonMembers />
          )}
        </MembersList>
      </MembersContainer>
    </ThemeProvider>
  );
};

export default Members;

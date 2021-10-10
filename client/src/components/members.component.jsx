import React from "react";
import { ThemeProvider } from "styled-components";

import {
  MembersTitle,
  MembersContainer,
  MembersList,
  MembersImage,
  MembersListContainer,
  MembersName,
  MembersStatus,
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

  const onlineMembers = members.filter((member) => member.status === "online");
  const offlineMembers = members.filter(
    (member) => member.status === "offline"
  );

  const theme = {};

  return (
    <ThemeProvider theme={theme}>
      <MembersTitle> Members</MembersTitle>
      <MembersContainer>
        <MembersList>
          {onlineMembers && onlineMembers.length !== 0
            ? onlineMembers.map((member, index) => (
                <MembersListContainer key={index}>
                  <MembersImage status="online">
                    <MembersStatus status="online" />
                  </MembersImage>
                  <MembersName status="online">
                    {" "}
                    {member.displayName}
                  </MembersName>
                </MembersListContainer>
              ))
            : null}
          {offlineMembers && offlineMembers.length !== 0
            ? offlineMembers.map((member, index) => (
                <MembersListContainer key={index}>
                  <MembersImage>
                    <MembersStatus />
                  </MembersImage>
                  <MembersName> {member.displayName}</MembersName>
                </MembersListContainer>
              ))
            : null}
        </MembersList>
      </MembersContainer>
    </ThemeProvider>
  );
};

export default Members;

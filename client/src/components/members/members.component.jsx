import React from "react";
import "./members.styles.scss";

const Members = () => {
  const online = [
    {
      displayName: "SojhoKto",
      avatar: "0",
    },
    {
      displayName: "PogMaster",
      avatar: "1",
    },
    {
      displayName: "Apex Ashish",
      avatar: "2",
    },
  ];

  const offline = [
    {
      displayName: "Braxton",
      avatar: "0",
    },
    {
      displayName: "Biswash",
      avatar: "1",
    },
  ];
  return (
    <>
      <div className="members-title"> Members</div>
      <div className="members-online">
        <span className="members-online-count">Online-3</span>

        <ul className="members-online-list">
          {online.map((member, index) => (
            <div className="members-online-list-container" key={index}>
              <span className="members-online-list-img"> 0</span>
              <li className="members-online-list-display-name">
                {" "}
                {member.displayName}
              </li>
              <span className="members-online-list-symbol"> </span>
            </div>
          ))}
        </ul>
      </div>

      <div className="members-offline">
        <span className="members-offline-count">Offline-2</span>

        <ul className="members-offline-list">
          {offline.map((member, index) => (
            <div className="members-offline-list-container" key={index}>
              <span className="members-offline-list-img"> 0</span>
              <li className="members-offline-list-display-name">
                {" "}
                {member.displayName}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Members;

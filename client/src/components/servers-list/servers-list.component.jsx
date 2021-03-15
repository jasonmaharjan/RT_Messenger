import React, { useState } from "react";

import "./servers-list.styles.scss";

const ServersList = () => {
  const servers = [
    {
      name: "PIG",
    },
    {
      name: "CSFL",
    },
    {
      name: "HCI",
    },
    {
      name: "C++",
    },
    {
      name: "JS",
    },
    {
      name: "+",
    },
  ];

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    console.log(1);
  };

  return (
    <ul className="servers-list">
      {servers.map((server, index) => (
        <li className="servers-list-server" key={index}>
          {click ? <div className="btn-click">{""}</div> : null}
          <button className="servers-list-server-name" onClick={handleClick}>
            {server.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ServersList;

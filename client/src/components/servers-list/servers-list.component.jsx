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
    <div className="servers">
      {click ? <div className="btn-click">{""}</div> : null}
      <ul className="servers-list">
        {servers.map((server, index) => (
          <li className="servers-list-server" key={index}>
            <button className="servers-list-server-name" onClick={handleClick}>
              {server.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServersList;

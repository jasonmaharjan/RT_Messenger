import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createServer } from "../../redux/server/server.actions";
import { selectServer } from "../../redux/server/server.selectors";

import "./servers-list.styles.scss";

const ServersList = ({ currentUser, servers, createServer }) => {
  console.log(servers, currentUser);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleCreateServer = () => {
    console.log(1);
    createServer();
  };

  return (
    <div className="servers">
      {click ? <div className="btn-click">{""}</div> : null}
      <ul className="servers-list">
        <li className="servers-list-server" key={1}>
          <button
            className="servers-list-server-name"
            onClick={handleCreateServer}
          >
            +
          </button>
        </li>
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

const MapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  servers: selectServer,
});

const MapDispatchToProps = (dispatch) => ({
  createSever: (userData) => dispatch(createServer(userData)),
});

export default connect(MapStateToProps, MapDispatchToProps)(ServersList);

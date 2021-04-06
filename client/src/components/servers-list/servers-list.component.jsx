import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createServer } from "../../redux/server/server.actions";
import { selectServer } from "../../redux/server/server.selectors";

import { getServerData } from "../../redux/server/server.actions";

import "./servers-list.styles.scss";

const ServersList = ({ currentUser, servers, getServerData, createServer }) => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      getServerData(token);
    }
  }, []);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const handleCreateServer = () => {
    // Modal or smth here...
    const serverName = "Pida Inducing Group";
    const serverImageURL = "yowza";

    const serverData = {
      token,
      serverName,
      serverImageURL,
    };
    createServer(serverData);
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
      </ul>
    </div>
  );
};

const MapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  servers: selectServer,
});

const MapDispatchToProps = (dispatch) => ({
  getServerData: (token) => dispatch(getServerData(token)),
  createServer: (serverData) => dispatch(createServer(serverData)),
});

export default connect(MapStateToProps, MapDispatchToProps)(ServersList);

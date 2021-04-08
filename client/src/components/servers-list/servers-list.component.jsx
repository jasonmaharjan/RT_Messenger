import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectServer } from "../../redux/server/server.selectors";
import {
  getServerData,
  toggleCreateServer,
} from "../../redux/server/server.actions";

import "./servers-list.styles.scss";

const ServersList = ({
  currentUser,
  servers,
  getServerData,
  toggleCreateServer,
}) => {
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
    toggleCreateServer();
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
  servers: selectServer,
});

const MapDispatchToProps = (dispatch) => ({
  getServerData: (token) => dispatch(getServerData(token)),
  toggleCreateServer: () => dispatch(toggleCreateServer()),
});

export default connect(MapStateToProps, MapDispatchToProps)(ServersList);

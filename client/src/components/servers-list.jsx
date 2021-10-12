import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectServer,
  selectServerAdded,
} from "../redux/server/server.selectors";
import {
  getServerData,
  toggleCreateServer,
  arrangeServerList,
} from "../redux/server/server.actions";

import { ThemeProvider } from "styled-components";

import {
  ServersListContainer,
  Servers,
  ServerBtn,
  ServerName,
  ServerSelect,
} from "../styles/ServerCol";

const ServersList = ({
  servers,
  getServerData,
  toggleCreateServer,
  serverAdded,
}) => {
  const token = localStorage.getItem("token");
  const [serverSelected, setServerSelected] = useState(false);
  const [serverPosition, setServerPosition] = useState(null);

  // create an array of refs for the servers
  const serverRefs = useRef(servers.map(() => React.createRef())); // e.g. {current: [0: {current}, 1: {current}]}

  useEffect(() => {
    if (token) {
      getServerData(token);
    }
  }, []);

  useEffect(() => {
    if (serverAdded) {
      window.location.reload();
    }
  }, [serverAdded]);

  const handleClick = (index) => {
    if (serverRefs.current) {
      setServerPosition(
        serverRefs.current[index].current.getBoundingClientRect().y
      );
    }
    setServerSelected(true);
  };

  const handleCreateServer = () => {
    toggleCreateServer();
  };

  // display the abbreviation of the servername
  const getServerAbv = (name) => {
    const nameArr = name.split(" ");
    var abbreviation = "";
    for (var i = 0; i <= nameArr.length - 1; i++) {
      if (i === 3) {
        break;
      }
      abbreviation += nameArr[i].charAt(0);
    }
    return <ServerName>{abbreviation}</ServerName>;
  };

  const theme = {
    serverPosition: serverPosition,
  };

  return (
    <ThemeProvider theme={theme}>
      {serverSelected ? (
        <ServerSelect position={serverPosition}>{""}</ServerSelect>
      ) : null}

      <ServersListContainer>
        {servers
          ? servers.map((server, index) => (
              <Servers key={index}>
                <ServerBtn
                  onClick={() => handleClick(index)}
                  ref={serverRefs.current[index]}
                >
                  {getServerAbv(server.serverName)}
                </ServerBtn>
              </Servers>
            ))
          : null}
        <Servers key={1}>
          <ServerBtn onClick={handleCreateServer}>+</ServerBtn>
        </Servers>
      </ServersListContainer>
    </ThemeProvider>
  );
};

const MapStateToProps = createStructuredSelector({
  servers: selectServer,
  serverAdded: selectServerAdded,
});

const MapDispatchToProps = (dispatch) => ({
  getServerData: (token) => dispatch(getServerData(token)),
  toggleCreateServer: () => dispatch(toggleCreateServer()),
  arrangeServerList: (data) => dispatch(arrangeServerList(data)),
});

export default connect(MapStateToProps, MapDispatchToProps)(ServersList);

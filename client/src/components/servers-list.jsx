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
import { setSelectedServer } from "../redux/user/user.actions";
import { selectCurrentServer } from "../redux/user/user.selectors";

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
  selectedServer,
  setCurrentServerAsSelected,
}) => {
  const token = localStorage.getItem("token");
  const [serverSelected, setServerSelected] = useState(
    selectedServer || { serverId: null, position: null }
  );
  // const [selectedServerPosition, setSelectedServerPosition] = useState(null);

  // create an array of refs for the servers
  const serverRefs = useRef(servers.map(() => React.createRef())); // e.g. {current: [0: {current}, 1: {current}]}

  useEffect(() => {
    if (token) {
      getServerData(token);
    }
  }, []);

  // set the current server selected on page load
  // useEffect(() => {
  //   setSelectedServerPosition(77.3125);
  //   setServerSelected(true);
  // }, []);

  useEffect(() => {
    if (serverAdded) {
      setSelectedServer();
      window.location.reload();
    }
  }, [serverAdded]);

  const handleClick = (server, index) => {
    const yPosition =
      serverRefs.current[index].current.getBoundingClientRect().y;
    const payload = { serverId: server._id, position: yPosition };
    setServerSelected(payload);
    setCurrentServerAsSelected(payload);
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
    selectedServerPosition: selectedServer.position,
  };

  return (
    <ThemeProvider theme={theme}>
      {serverSelected ? (
        <ServerSelect position={selectedServer.position}>{""}</ServerSelect>
      ) : null}

      <ServersListContainer>
        {servers
          ? servers.map((server, index) => (
              <Servers key={index}>
                <ServerBtn
                  onClick={() => handleClick(server, index)}
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
  selectedServer: selectCurrentServer,
});

const MapDispatchToProps = (dispatch) => ({
  getServerData: (token) => dispatch(getServerData(token)),
  toggleCreateServer: () => dispatch(toggleCreateServer()),
  arrangeServerList: (data) => dispatch(arrangeServerList(data)),
  setCurrentServerAsSelected: (server) => dispatch(setSelectedServer(server)),
});

export default connect(MapStateToProps, MapDispatchToProps)(ServersList);

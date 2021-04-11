import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { createStructuredSelector } from "reselect";
import { selectServer } from "../../redux/server/server.selectors";
import {
  getServerData,
  toggleCreateServer,
} from "../../redux/server/server.actions";

import "./servers-list.styles.scss";

const ServersList = ({ currentUser, getServerData, toggleCreateServer }) => {
  const token = localStorage.getItem("token");
  const [servers, setServers] = useState([
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
  ]);
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

  /*const getAbb = (name) => {
    const nameArr = name.split(" ");
    console.log(nameArr);
    var abbreviation = "";
    for (var i = 0; i <= nameArr.length - 1; i++) {
      if (i === 4) {
        break;
      }
      abbreviation += nameArr[i].charAt(0);
    }
    return <span className="servers-list-server-name-abb">{abbreviation}</span>;
  };*/

  const handleDragEnd = ({ destination, source }) => {
    // console.log('source',source)
    // console.log('destination',destination)

    if (!destination) {
      console.log("null");
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    if (
      source.index === servers.length - 1 ||
      destination.index === servers.length - 1
    ) {
      return;
    }

    const item1 = servers[source.index];
    const item2 = servers[destination.index];

    console.log(item1, item2);
    setServers((prev) => {
      prev = [...prev];
      prev.splice(source.index, 1);
      prev.splice(destination.index, 0, item1);
      return prev;
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div>
        <Droppable droppableId="server-list">
          {(provided, snapshot) => {
            return (
              <ul
                className="servers-list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {servers
                  ? servers.map((server, index) => {
                      return (
                        <Draggable
                          key={server.name}
                          index={index}
                          draggableId={server.name}
                        >
                          {(provided) => {
                            return (
                              <li
                                className="servers-list-server"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <div
                                  className="servers-list-server-name"
                                  onClick={handleClick}
                                >
                                  {server.name}
                                  {/*{getAbb(server.serverName)}*/}
                                </div>
                              </li>
                            );
                          }}
                        </Draggable>
                      );
                    })
                  : null}

                <li className="servers-list-server" key={1}>
                  <button
                    className="servers-list-server-name"
                    onClick={handleCreateServer}
                  >
                    +
                  </button>
                </li>
                {provided.placeholder}
              </ul>
            );
          }}
        </Droppable>
      </div>
    </DragDropContext>
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

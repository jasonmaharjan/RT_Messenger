import React, { useState } from "react";
import { connect } from "react-redux";
import {
  createServer,
  toggleCreateServer,
} from "../redux/server/server.actions";

import FormInput from "./formInput";
import Button from "./button";

import {
  Modal,
  ModalContent,
  ModalHeading,
  ModalCloseBtn,
  ModalInput,
} from "../styles/Modal";

const CreateServer = ({ createServer, toggleCreateServer }) => {
  const token = localStorage.getItem("token");
  const [serverName, setServerName] = useState("");
  const [serverImageURL, setServerImageURL] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "serverName":
        setServerName(value);
        break;

      case "serverImageURL":
        setServerImageURL(value);
        break;

      default:
        return null;
    }
  };

  const handleClick = () => {
    const serverData = { token, serverName, serverImageURL };
    createServer(serverData);
    toggleCreateServer();
  };

  const handleClose = () => {
    toggleCreateServer();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Modal onSubmit={handleSubmit}>
      <ModalContent>
        <ModalHeading>Create a server</ModalHeading>
        <ModalCloseBtn
          className="create-server-form-content-close"
          onClick={handleClose}
        >
          &#10006;
        </ModalCloseBtn>
        <ModalInput>
          <FormInput
            name="serverName"
            type="string"
            value={serverName}
            placeholder="server's name"
            handleChange={handleChange}
            required
            style={{ margin: "-1rem" }}
          />
          <FormInput
            name="serverImageURL"
            type="string"
            value={serverImageURL}
            placeholder="server's image URL"
            handleChange={handleChange}
            required
            style={{ margin: "0rem -1rem 1rem -1rem" }}
          />
          <Button
            title="submit"
            handleClick={handleClick}
            style={{ marginTop: "2rem" }}
          />
        </ModalInput>
      </ModalContent>
    </Modal>
  );
};

const MapDispatchToProps = (dispatch) => ({
  createServer: (serverData) => dispatch(createServer(serverData)),
  toggleCreateServer: () => dispatch(toggleCreateServer()),
});

export default connect(null, MapDispatchToProps)(CreateServer);

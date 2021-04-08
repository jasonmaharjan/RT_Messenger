import React, { useState } from "react";
import { connect } from "react-redux";
import {
  createServer,
  toggleCreateServer,
} from "../../redux/server/server.actions";

import FormInput from "../formInput/formInput.component";
import Button from "../../components/button/button.component";

import "./createServer.scss";

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
        console.log("Login form fill up");
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
    <form className="create-server-form" onSubmit={handleSubmit}>
      <div className="create-server-form-content">
        <span className="create-server-form-content-heading">
          Create a server
        </span>
        <span
          className="create-server-form-content-close"
          onClick={handleClose}
        >
          &#10006;
        </span>
        <div className="create-server-form-content-input">
          <FormInput
            name="serverName"
            type="string"
            value={serverName}
            placeholder="server's name"
            handleChange={handleChange}
            required
          />
          <FormInput
            name="serverImageURL"
            type="string"
            value={serverImageURL}
            placeholder="server's image URL"
            handleChange={handleChange}
            required
          />
          <Button title="submit" handleClick={handleClick} />
        </div>
      </div>
    </form>
  );
};

const MapDispatchToProps = (dispatch) => ({
  createServer: (serverData) => dispatch(createServer(serverData)),
  toggleCreateServer: () => dispatch(toggleCreateServer()),
});

export default connect(null, MapDispatchToProps)(CreateServer);

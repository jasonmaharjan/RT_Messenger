import { ServerActionTypes } from "./server.types";

const INITIAL_STATE = {
  servers: [],
};

const ServerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ServerActionTypes.CREATE_SERVER:
      return {
        ...state,
        servers: action.payload,
      };

    default:
      return state;
  }
};

export default ServerReducer;

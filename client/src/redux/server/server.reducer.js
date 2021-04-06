import { ServerActionTypes } from "./server.types";

const INITIAL_STATE = {
  servers: null,
  error: null,
};

const ServerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ServerActionTypes.GET_SERVER_DATA_SUCCESS:
      return {
        ...state,
        servers: action.payload.data,
      };

    case ServerActionTypes.CREATE_SERVER_SUCCESS:
      return {
        ...state,
        servers: state.servers.push(action.payload),
      };

    case ServerActionTypes.GET_SERVER_DATA_FAILURE:
    case ServerActionTypes.CREATE_SERVER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default ServerReducer;

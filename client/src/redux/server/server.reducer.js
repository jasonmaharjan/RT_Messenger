import { ServerActionTypes } from "./server.types";
import { getServerData } from "./server.utils";

const INITIAL_STATE = {
  servers: [],
  toggleFlag: false,
  error: null,
};

const ServerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ServerActionTypes.GET_SERVER_DATA_SUCCESS:
      return {
        ...state,
        servers: [...action.payload],
      };

    case ServerActionTypes.CREATE_SERVER_SUCCESS:
      return {
        ...state,
        servers: [...state.servers, action.payload],
      };

    case ServerActionTypes.ARRANGE_SERVER_LIST_SUCCESS:
      return {
        ...state,
        servers: [...action.payload],
      };

    case ServerActionTypes.GET_SERVER_DATA_FAILURE:
    case ServerActionTypes.CREATE_SERVER_FAILURE:
    case ServerActionTypes.ARRANGE_SERVER_LIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case ServerActionTypes.TOGGLE_CREATE_SERVER:
      return {
        ...state,
        toggleFlag: !state.toggleFlag,
      };

    default:
      return state;
  }
};

export default ServerReducer;

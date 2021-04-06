import { ServerActionTypes } from "./server.types";

// get server data
export const getServerData = (token) => ({
  type: ServerActionTypes.GET_SERVER_DATA,
  payload: token,
});

export const getServerDataSuccess = (data) => ({
  type: ServerActionTypes.GET_SERVER_DATA_SUCCESS,
  payload: data,
});

export const getServerDataFailure = (error) => ({
  type: ServerActionTypes.GET_SERVER_DATA_FAILURE,
  payload: error,
});

// create server
export const createServer = (serverData) => ({
  type: ServerActionTypes.CREATE_SERVER,
  payload: serverData,
});

export const createServerSuccess = (data) => ({
  type: ServerActionTypes.CREATE_SERVER_SUCCESS,
  payload: data,
});

export const createServerFailure = (error) => ({
  type: ServerActionTypes.CREATE_SERVER_FAILURE,
  payload: error,
});

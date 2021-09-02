import { ServerActionTypes } from "./server.types";

// get server data
export const getServerData = (token) => ({
  type: ServerActionTypes.GET_SERVER_DATA,
  payload: token,
});

export const getServerDataSuccess = (servers) => ({
  type: ServerActionTypes.GET_SERVER_DATA_SUCCESS,
  payload: servers,
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

export const toggleCreateServer = () => ({
  type: ServerActionTypes.TOGGLE_CREATE_SERVER,
});

export const arrangeServerList = (data) => ({
  type: ServerActionTypes.ARRANGE_SERVER_LIST,
  payload: data,
});

export const arrangeServerListSuccess = (newServerList) => ({
  type: ServerActionTypes.ARRANGE_SERVER_LIST_SUCCESS,
  payload: newServerList,
});

export const arrangeServerListFailure = (error) => ({
  type: ServerActionTypes.ARRANGE_SERVER_LIST_FAILURE,
  payload: error,
});

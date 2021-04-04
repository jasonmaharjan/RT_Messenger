import { ServerActionTypes } from "./server.types";

export const createServer = (userData) => ({
  type: ServerActionTypes.CREATE_SERVER,
  payload: userData,
});

export const createServerSuccess = () => ({
  type: ServerActionTypes.CREATE_SERVER_SUCCESS,
});

export const createServerFailure = (error) => ({
  type: ServerActionTypes.CREATE_SERVER_FAILURE,
  payload: error,
});

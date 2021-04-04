import { createSelector } from "reselect";

const selectserver = (state) => state.server;

export const selectServer = createSelector(
  [selectserver],
  (server) => server.servers
);

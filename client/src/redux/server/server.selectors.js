import { createSelector } from "reselect";

const selectserver = (state) => state.server;

export const selectServer = createSelector(
  [selectserver],
  (server) => server.servers
);

export const selectError = createSelector(
  [selectserver],
  (server) => server.error
);

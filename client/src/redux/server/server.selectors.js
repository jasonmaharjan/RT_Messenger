import { createSelector } from "reselect";

const selectserver = (state) => state.server;

export const selectServer = createSelector(
  [selectserver],
  (server) => server.servers
);

export const selectToggle = createSelector(
  [selectserver],
  (server) => server.toggleFlag
);

export const selectError = createSelector(
  [selectserver],
  (server) => server.error
);

export const selectServerAdded = createSelector(
  [selectserver],
  (server) => server.serverAdded
);

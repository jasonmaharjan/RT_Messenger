import { createSelector } from "reselect";

const selectSettings = (state) => state.settings;

export const selectTheme = createSelector(
  [selectSettings],
  (settings) => settings.theme
);

export const selectAllThemes = createSelector(
  [selectSettings],
  (settings) => settings.allThemes
);

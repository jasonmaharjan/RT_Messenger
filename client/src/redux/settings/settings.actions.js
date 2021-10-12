import { SettingsActionTypes } from "./settings.types";

// action to change theme
export const changeTheme = (theme) => ({
  type: SettingsActionTypes.CHANGE_THEME,
  payload: theme,
});

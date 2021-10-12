import { SettingsActionTypes } from "./settings.types";
import { DefaultTheme, BrownTheme, PurpleTheme } from "../../styles/Themes";

const INITIAL_STATE = {
  theme: DefaultTheme,
  allThemes: [DefaultTheme, BrownTheme, PurpleTheme],
};

const SettingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SettingsActionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};

export default SettingsReducer;

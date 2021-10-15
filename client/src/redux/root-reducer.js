import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import UserReducer from "./user/user.reducer";
import ServerReducer from "./server/server.reducer";
import SettingsReducer from "./settings/settings.reducer";

const persistConfig = {
  key: "a39aasaa73",
  storage,
  whitelist: ["user", "server", "settings"],
};

const rootReducer = combineReducers({
  user: UserReducer,
  server: ServerReducer,
  settings: SettingsReducer,
});

export default persistReducer(persistConfig, rootReducer);

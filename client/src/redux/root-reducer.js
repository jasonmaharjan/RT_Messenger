import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import UserReducer from "./user/user.reducer";
import ServerReducer from "./server/server.reducer";

const persistConfig = {
  key: "chat",
  storage,
  whitelist: ["user", "server"],
};

const rootReducer = combineReducers({
  user: UserReducer,
  server: ServerReducer,
});

export default persistReducer(persistConfig, rootReducer);

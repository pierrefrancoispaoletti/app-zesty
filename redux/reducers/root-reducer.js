import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { itemReducer } from "./ItemReducer/reducer";

const persistConfig = {
  key: "zesty",
  storage,
  whitelist: ["items"],
};

const reducers = combineReducers({
  items: itemReducer,
});

export default persistReducer(persistConfig, reducers);

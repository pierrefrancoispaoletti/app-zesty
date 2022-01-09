import reducers from "./reducers/root-reducer";
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(reducers, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };

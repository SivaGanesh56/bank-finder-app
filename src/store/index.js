import { combineReducers, createStore,  } from "redux";
import Reducer from "./reducers";

const store = createStore(combineReducers({ state: Reducer }));

export default store;
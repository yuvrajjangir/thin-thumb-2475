import {Middleware, applyMiddleware, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import userReducer from "./auth/reducer";

const store = legacy_createStore(userReducer, applyMiddleware(thunk));

export default store;
//redux
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
//reducers
import contactsReducer from "./contactsReducer";

const reducer = combineReducers({ contactsReducer });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

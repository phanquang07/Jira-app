import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from './reducer/loginReducer'
import { membersReducer } from "./reducer/membersReducer";
import { projectCategoryReducer } from "./reducer/projectCategoryReducer";
import { projectReducer } from "./reducer/projectReducer";
import userReducer from "./reducer/userReducer";

const rootReducer = combineReducers({ loginReducer, projectReducer, projectCategoryReducer, userReducer })

export const store = createStore(rootReducer, applyMiddleware(thunk))
// /tạo kho
import {createStore,combineReducers} from "redux";
import jobReducer from "./reducer/jobReducer";

const rootReducer=combineReducers({
    jobReducer
})
export const store=createStore(rootReducer)
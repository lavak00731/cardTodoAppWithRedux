import { createStore, combineReducers } from "redux";
import loginReducer from "../Reducers/LoginReducer";

const unitedReducer = combineReducers({
    login: loginReducer
});

const store = createStore(unitedReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
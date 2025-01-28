import { createStore, combineReducers } from "redux";
import loginReducer from "../Reducers/LoginReducer";
import TasksReducer from "../Reducers/TasksReducer";
import CategoriesReducer from "../Reducers/CategoriesReducer";
import TagsReducer from "../Reducers/TagsReducer";
import ModalReducer from "../Reducers/ModalReducer";


const unitedReducer = combineReducers({
    login: loginReducer,
    tasks: TasksReducer,
    categories: CategoriesReducer,
    tags: TagsReducer,
    modal: ModalReducer
});

const store = createStore(unitedReducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
import { CREATE_TAGS, MODIFY_TAGS, REMOVE_TAGS } from "../Constants/reducerConstants";
import  TagType from "../Interfaces/TagType";

interface actionInt {
    type: string,
    payload: TagType[],
}

const initialState = {
    items: []
};


const TasksReducer = (state = initialState, action:actionInt)=>{ 
    switch (action.type) {
        case CREATE_TAGS:
        case MODIFY_TAGS:
            return {
                ...state,
                items: action.payload
            }
        case REMOVE_TAGS:
            return {
                ...state,
                items: state.items.filter(task => task !== action.payload[0])
            }
        default:
            return state;
    }
}
export default TasksReducer;
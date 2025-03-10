import { CREATETAGS, MODIFYTAGS, REMOVETAGS } from "../Constants/reducerConstants";
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
        case CREATETAGS:
        case MODIFYTAGS:
            return {
                ...state,
                items: action.payload
            }
        case REMOVETAGS:
            return {
                ...state,
                items: state.items.filter(task => task !== action.payload[0])
            }
        default:
            return state;
    }
}
export default TasksReducer;
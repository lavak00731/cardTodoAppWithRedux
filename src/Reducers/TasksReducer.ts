import { CREATETASK } from "../Constants/reducerConstans";
import { REMOVETASK } from "../Constants/reducerConstans";
import { EDITTASK } from "../Constants/reducerConstans";
import TaskType from "../Interfaces/TasksType";



interface actionInt {
    type: string,
    payload: TaskType[],
}

const initialState = {
    items: []
};


const TasksReducer = (state = initialState, action:actionInt)=>{ 
    switch (action.type) {
        case CREATETASK:
        case EDITTASK:
            return {
                ...state,
                items: action.payload
            }
        /*case REMOVETASK:
            return [
                ...state.filter(task => task !== action.payload[0])
            ]*/
        default:
            return state;
    }
}
export default TasksReducer;
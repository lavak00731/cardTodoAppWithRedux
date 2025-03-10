import { CREATETASK, REMOVETASK, EDITTASK } from "../Constants/reducerConstants";
import TaskType from "../Interfaces/TasksType";

interface actionInt {
    type: string,
    payload: TaskType,
}

const initialState: { items: TaskType[] } = {
    items: []
};

const TasksReducer = (state = initialState, action:actionInt)=>{ 
    switch (action.type) {
        case CREATETASK:
            return {
                ...state,
                items: action.payload
            }
        case EDITTASK:
            /* const editedElem = state.items.find((item:TaskType, index) => item.id === action.payload.id)
            const editedElemIndex = state.items.findIndex((item:TaskType, index) => item.id === action.payload.id)
            editedElem?.name = action.payload.name*/
            return {
                ...state,
                //items: [state.items.slice(0, editedElemIndex - 1), editedElem, state.items.slice(editedElemIndex, state.items.length - 1)]
                items: state.items.map((item: TaskType) => {
                    if(item.id === action.payload.id) {
                        return action.payload
                    } else {
                        return item;
                    }
                })
            }
        case REMOVETASK:
            return {
                ...state,
                items: state.items.filter(task => task.id !== action.payload.id)
            }
        default:
            return state;
    }
}
export default TasksReducer;
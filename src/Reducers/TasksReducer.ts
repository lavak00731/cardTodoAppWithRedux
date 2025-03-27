import { CREATE_TASK, REMOVE_TASK, EDIT_TASK, ADD_TASKS } from "../Constants/reducerConstants";
import TaskType from "../Interfaces/TasksType";

interface actionInt {
    type: string,
    payload: TaskType[],
}

const initialState: { items: TaskType[] } = {
    items: []
};

const TasksReducer = (state = initialState, action:actionInt)=>{ 
    console.log(action)
    switch (action.type) {
        case ADD_TASKS:
            return {

                ...state,
                items: action.payload

            }
        case CREATE_TASK:
            return {
                ...state,
                items: state.items.concat(action.payload) // TaskType
            }
        case EDIT_TASK:
            /* const editedElem = state.items.find((item:TaskType, index) => item.id === action.payload.id)
            const editedElemIndex = state.items.findIndex((item:TaskType, index) => item.id === action.payload.id)
            editedElem?.name = action.payload.name*/
            return {
                ...state,
                //items: [state.items.slice(0, editedElemIndex - 1), editedElem, state.items.slice(editedElemIndex, state.items.length - 1)]
                items: state.items.map((item: TaskType) => {
                    if(item.id === action?.payload[0]?.id) {
                        return action.payload[0]
                    } else {
                        return item;
                    }
                })
            }
        case REMOVE_TASK:
            return {
                ...state,
                items: state.items.filter(task => task.id !== (action.payload[0].id))
            }
        default:
            return state;
    }
}
export default TasksReducer;
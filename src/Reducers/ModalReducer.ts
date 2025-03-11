import { OPENCREATEMODAL, OPENEDITMODAL, CLOSEMODAL } from "../Constants/reducerConstants";
import ModalType from "../Interfaces/ModalType";
import TaskType, {statusEnum} from "../Interfaces/TasksType";


interface actionInt {
    type: string,
    payload: TaskType,
}

const initialState:ModalType = {
    isVisible: false,
    isEdited: false,
    task: {
        id: 0,
        name: "",
        initDate: "",
        dueDate: "",
        category: "",
        comment: "",
        tags: [],
        url: "",
        status: statusEnum.notStarted
    }
}

const ModalReducer = (state = initialState, action:actionInt)=>{ 
    switch (action.type) {
        case OPENCREATEMODAL:
            return {
                ...state,
                isVisible: true,
                isEdited: false,
            }
        case OPENEDITMODAL:
            return {
                ...state,
                isVisible: true,
                isEdited: true,
                task: action.payload
            }
        case CLOSEMODAL:
            return {
                ...state,
                isVisible: false,
                isEdited: false,
                task: action.payload
            }
        default:
            return state;
    }
}
export default ModalReducer
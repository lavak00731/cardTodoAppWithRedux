import { OPEN_CREATE_MODAL, OPEN_EDIT_MODAL, CLOSE_MODAL, OPEN_REMOVE_MODAL } from "../Constants/reducerConstants";
import ModalType from "../Interfaces/ModalType";
import TaskType, {statusEnum} from "../Interfaces/TasksType";


interface actionInt {
    type: string,
    payload: TaskType,
}

const initialState:ModalType = {
    isVisible: false,
    isEdited: false,
    isRemoved: false,
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
        case OPEN_CREATE_MODAL:
            return {
                ...state,
                isVisible: true,
                isEdited: false,
                isRemoved: false
            }
        case OPEN_EDIT_MODAL:
            return {
                ...state,
                isVisible: true,
                isEdited: true,
                isRemoved: false,
                task: action.payload
            }
        case OPEN_REMOVE_MODAL: 
            return {
                ...state,
                isVisible: true,
                isEdited: false,
                isRemoved: true,
                task:action.payload
            }
        case CLOSE_MODAL:
            return {
                ...state,
                isVisible: false,
                isEdited: false,
                isRemoved: false,
                task: action.payload
            }
        default:
            return state;
    }
}
export default ModalReducer
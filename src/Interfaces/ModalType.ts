import TaskType from "./TasksType"
interface ModalType {
    isVisible: boolean
    isEdited: boolean,
    isRemoved: boolean,
    task: TaskType,
}
export default ModalType;
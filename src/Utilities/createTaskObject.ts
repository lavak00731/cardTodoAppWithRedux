import ModalType from '../Interfaces/ModalType';
import _uniqueId from 'lodash/uniqueId';
import TaskType, { statusEnum } from '../Interfaces/TasksType';

const createTaskObject = (data: FormData, modalInfo: ModalType ) => {
    
    const object: TaskType = {
        id: 0,
        name: '',
        initDate: '',
        dueDate: '',
        category: '',
        comment: '',
        status: statusEnum.notStarted,
        tags: [],
        url: "",

    };
   
    const tagsValue: FormDataEntryValue[] = [];
    data.forEach((val, key)=>{
        if(key === 'tags') {
            tagsValue.push(val);
            object[key] = tagsValue;
        } else {
            object[key] = val
        }        
    })
    if(modalInfo.isEdited) {
        object['id'] = modalInfo.task.id;
    } else {
        object['id'] = _uniqueId('taskId'+Date.now())
    }
    return object;
}
export default createTaskObject
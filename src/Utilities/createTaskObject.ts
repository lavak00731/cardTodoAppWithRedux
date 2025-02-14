import ModalType from '../Interfaces/ModalType';
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
   console.log(data)
    const tagsValue: FormDataEntryValue[] = [];
    data.forEach((val, key)=>{
        if(key === 'tags') {
            tagsValue.push(val.toString());
            object[key] = tagsValue as unknown as string[];
        } else {
            object[key] = val
        }        
    })
    if(modalInfo.isEdited) {
        object['id'] = modalInfo.task.id;
    } else {
        object['id'] = Date.now()
    }
    return object;
}
export default createTaskObject
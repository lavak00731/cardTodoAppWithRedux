import ModalType from '../Interfaces/ModalType';
import _uniqueId from 'lodash/uniqueId';

const createTaskObject = (data: FormData, modalInfo: ModalType ) => {
    
    const object: { [key: string]: any } = {};
   
    const tagsValue: FormDataEntryValue[] = [];
    data.forEach((val, key)=>{
        if(key === 'tagname') {
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
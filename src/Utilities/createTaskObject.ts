//import { statusEnum } from "../Interfaces/TasksType";
import ModalType from '../Interfaces/ModalType';
//import _uniqueId from 'lodash/uniqueId';

const createTaskObject = (data: FormData, modalInfo: ModalType ) => {
    
    //const object: { [key: string]: any } = {};
    console.log(modalInfo)
    console.log(data.get('name'))
    
}
export default createTaskObject
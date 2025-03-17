import { FormEvent} from 'react';
import { useDispatch, useSelector } from "react-redux";
import TaskType, { statusEnum } from '../Interfaces/TasksType';
import { CLOSE_MODAL, EDIT_TASK, CREATE_TASK } from '../Constants/reducerConstants';
import putService from '../Services/putService';
import postService from '../Services/postService';
import createTaskObject from '../Utilities/createTaskObject';
import { CreateEditForm } from './CreateEditForm';
import ModalType from '../Interfaces/ModalType';
import RootState from "../Interfaces/RootState";

export const Modal = () => {
    
    
    const dispatch = useDispatch();
    const modalInitialState:TaskType = {
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
     const modalInfo = useSelector((store: RootState) => store.modal as ModalType); 
     console.log(modalInfo)
    const handleClose = () => {
      dispatch({type: CLOSE_MODAL, payload: modalInitialState});      
    }
    const handleSubmit = (e:FormEvent) => {
      e.preventDefault();
      const body = new FormData(e.target as HTMLFormElement)
      const info:TaskType = createTaskObject(body, modalInfo);
      const controller = new AbortController();
      const signal = controller.signal;
       
      if(modalInfo.isEdited) {
        const url = `http://localhost:5000/tasks/${info.id}`; 
        putService(url, info, signal);
        dispatch({type: EDIT_TASK, payload: info });
      } else {
        // Crear tarea
        const url = `http://localhost:5000/tasks/`; 
        postService(url, info, signal); // backend
        dispatch({ type: CREATE_TASK, payload: info }); // frontend

      }
      
      handleClose();
    }


  
  return (
    <CreateEditForm modalInitialState={modalInitialState} modalInfo={modalInfo} handleSubmit={handleSubmit} />
    
  )
}

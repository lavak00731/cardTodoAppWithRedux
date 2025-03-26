import { FormEvent} from 'react';
import { useDispatch, useSelector } from "react-redux";
import TaskType, { statusEnum } from '../Interfaces/TasksType';
import { CLOSE_MODAL, EDIT_TASK, CREATE_TASK, REMOVE_TASK } from '../Constants/reducerConstants';
import putService from '../Services/putService';
import postService from '../Services/postService';
import createTaskObject from '../Utilities/createTaskObject';
import { CreateEditForm } from './CreateEditForm';
import { ConfirmComp } from './ConfirmComp';
import ModalType from '../Interfaces/ModalType';
import RootState from "../Interfaces/RootState";
import deleteService from '../Services/deleteService';

export const Modal = () => {
    
    
    const dispatch = useDispatch();
    const modalInitialState:TaskType = {
      id: 0,
      name: "",
      initDate: "",
      dueDate: "",
      category: "Investigate Design",
      comment: "",
      tags: [],
      url: "",
      status: statusEnum.notStarted
    }
     const modalInfo = useSelector((store: RootState) => store.modal as ModalType); 
    const handleClose = () => {
      dispatch({type: CLOSE_MODAL, payload: modalInitialState});      
    }
    const getAbortSignal = () => {
      const controller = new AbortController();
      return controller.signal;
    }
    const handleRemove = () => {
      const signal = getAbortSignal();
      const task = modalInfo.task;
      const url = `http://localhost:5000/tasks/${task.id}`;
      const payloadArray = [task]
      deleteService(url, task, signal);
      dispatch({type: REMOVE_TASK, payload: payloadArray});
      handleClose()
    }
    const handleSubmit = (e:FormEvent) => {
      e.preventDefault();
      const body = new FormData(e.target as HTMLFormElement)
      const info:TaskType = createTaskObject(body, modalInfo);
      
      const signal = getAbortSignal();
      const payloadArray = [info]
      if(modalInfo.isEdited) {
        const url = `http://localhost:5000/tasks/${info.id}`; 
        putService(url, info, signal);
        dispatch({type: EDIT_TASK, payload: payloadArray });
      } else {
        // Crear tarea
        const url = `http://localhost:5000/tasks/`; 
        postService(url, info, signal); // backend
        dispatch({ type: CREATE_TASK, payload: payloadArray }); // frontend

      }      
      handleClose();
    }

  if(modalInfo.isRemoved) {
    return <ConfirmComp modalInfo={modalInfo} handleClose={handleClose} handleRemove={handleRemove} />
  } else {
    return (
      <CreateEditForm modalInitialState={modalInitialState} modalInfo={modalInfo} handleSubmit={handleSubmit} handleClose={handleClose} />    
    )
  }
}

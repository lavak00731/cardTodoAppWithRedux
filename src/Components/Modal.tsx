import { useEffect, useId, useState } from 'react';
import ModalType from '../Interfaces/ModalType';
import TaskType, { statusEnum } from '../Interfaces/TasksType';

export const Modal = ({isVisible, isEdited, task}:ModalType) => {
    const idElem = useId();
    const [taskData, settaskData] = useState<TaskType>({
      id: 0,
      name: "",
      initDate: "",
      dueDate: "",
      category: "",
      comment: "",
      tags: [],
      url: "",
      status: statusEnum.notStarted
    })
    const checkIfitisEdit = () => {
      if(isEdited && Object.keys(task).length > 0) {
        settaskData(task)
      } 
    }
    useEffect(() => {
      checkIfitisEdit();    
      return () => {}
    })
    const handleSubmit = (e:Event) => {
      console.log(e)
    }
    
  return (
    <div className="backdrop-opacity-10 backdrop-invert bg-white/30">
        <div aria-modal="true" hidden={isVisible} role="dialog" tabIndex={-1} className="bg-white" aria-labelledby={idElem+ "modalTitle"}>
          <h2 id={idElem+ "modalTitle"}>{isEdited ? `Edit ${task.name}` : 'Create Task' }</h2>
          <form action="" onSubmit={(e) => { handleSubmit(e) }} className="flex flex-col">
          <div className="flex flex-col mb-4">            
              <label className="text-gray-900 mb-1" htmlFor={idElem+'_taskName'}>Task Name</label>
              <input className="bg-gray-800 text-white p-2 rounded-md" 
                id={idElem+'_taskName'} 
                name="taskname" 
                type="text" 
                required 
                onChange={(e) => settaskData(prevState => ({
                  ...prevState,
                  name: e.target.value,
                }))}
                value={taskData.name}
              />  
            </div>
          </form>
        </div>
    </div>
    
  )
}

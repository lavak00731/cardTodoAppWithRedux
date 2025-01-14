import { useEffect, useId, useState } from 'react';
import { useSelector } from "react-redux";
import RootState from "../Interfaces/RootState";
import CategoryType from "../Interfaces/CategoryType";
import TagType from "../Interfaces/TagType";
import ModalType from '../Interfaces/ModalType';
import TaskType, { statusEnum } from '../Interfaces/TasksType';

export const Modal = ({isVisible, isEdited, task}:ModalType) => {
    const idElem = useId();
    const categories = useSelector((store: RootState) => store.categories.items as CategoryType[]);
    const tags = useSelector((store: RootState) => store.categories.items as TagType[]);
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
            <div className="flex flex-col mb-4">            
              <label className="text-gray-900 mb-1" htmlFor={idElem+'_categories'}>Categories</label>
              <select className="bg-gray-800 text-white p-2 rounded-md" 
                id={idElem+'_categories'} 
                name="taskcategory"
                required 
                onChange={(e) => settaskData(prevState => ({
                  ...prevState,
                  category: e.target.value,
                }))}
                value={taskData.category}
              >
                {
                  categories.map( (category) => (
                    <option key={category.id + Date.now()} value={category.name}>{category.name}</option>
                  ))
                }
              </select>  
            </div>
            <div className="flex flex-col mb-4">            
              <label className="text-gray-900 mb-1" htmlFor={idElem+'_tags'}>Tags</label>
              <select className="bg-gray-800 text-white p-2 rounded-md" 
                id={idElem+'_tags'} 
                name="tasktags"
                required 
                onChange={(e) => settaskData(prevState => ({
                  ...prevState,
                  tags: Array.from(e.target.selectedOptions, option => option.value),
                }))}
                value={taskData.tags}
              >
                {
                  tags.map( (tag) => (
                    <option key={tag.id + Date.now()} value={tag.name}>{tag.name}</option>
                  ))
                }
              </select>  
            </div>
            <div className="flex flex-col mb-4">            
              <label className="text-gray-900 mb-1" htmlFor={idElem+'_initDate'}>Init Date</label>
              <input className="bg-gray-800 text-white p-2 rounded-md" 
                id={idElem+'_initDate'} 
                name="taskinitdate" 
                type="date" 
                required 
                onChange={(e) => settaskData(prevState => ({
                  ...prevState,
                  initDate: e.target.value,
                }))}
                value={taskData.initDate}
              />  
            </div>
            <div className="flex flex-col mb-4">            
              <label className="text-gray-900 mb-1" htmlFor={idElem+'_dueDate'}>Due Date</label>
              <input className="bg-gray-800 text-white p-2 rounded-md" 
                id={idElem+'_dueDate'} 
                name="taskduedate" 
                type="date" 
                required 
                onChange={(e) => settaskData(prevState => ({
                  ...prevState,
                  dueDateDate: e.target.value,
                }))}
                value={taskData.dueDate}
              />  
            </div>
          </form>
        </div>
    </div>
    
  )
}

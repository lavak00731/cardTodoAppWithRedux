import { useEffect, useId, useState } from 'react';
import { useSelector } from "react-redux";
import RootState from "../Interfaces/RootState";
import CategoryType from "../Interfaces/CategoryType";
import TagType from "../Interfaces/TagType";
import ModalType from '../Interfaces/ModalType';
import TaskType, { statusEnum } from '../Interfaces/TasksType';

export const Modal = () => {
    const idElem = useId();
    const categories = useSelector((store: RootState) => store.categories.items as CategoryType[]);
    const tags = useSelector((store: RootState) => store.tags.items as TagType[]);
    const modalInfo = useSelector((store: RootState) => store.modal as ModalType);
    console.log(modalInfo)
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
  });
    
    const statuses= Object.values(statusEnum) as string[]
    
    useEffect(() => {
      settaskData(modalInfo.task);  
    }, [modalInfo, modalInfo.task])

    // const handleSubmit = (e:Event) => {
    //   console.log(e)
    // }


  if(!categories && !tags) {
    return 'Loading';
  }
  return (
    <div hidden={!modalInfo.isVisible} className="backdrop-opacity-10 backdrop-invert bg-black/60 fixed inset-0">
        <div aria-modal="true"  role="dialog" tabIndex={-1} className="bg-white relative translate-y-[50px] transition-all duration-300 ease-in-out opacity-100 w-full mt-7 p-6 lg:max-w-[500px] lg:mx-auto" aria-labelledby={idElem+ "modalTitle"}>
          <h2 id={idElem+ "modalTitle"} className='font-semibold text-xl mb-2'>{modalInfo.isEdited ? `Edit ${modalInfo.task.name}` : 'Create Task' }</h2>
          <form action="" className="flex flex-col">
            <div className="flex flex-col mb-4">            
              <label className="text-gray-900 mb-1" htmlFor={idElem+'_taskName'}>Task Name</label>
              <input className="bg-gray-800 text-white p-2 rounded-md" 
                value={modalInfo.task.name}
                id={idElem+'_taskName'}
                name="taskname"
                type="text"
                required
                onChange={(e) => settaskData(prevState => ({
                  ...prevState,
                  name: e.target.value,
                }))}
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
              <fieldset>
                <legend className="text-gray-900 mb-3">Tags</legend>
                {
                  tags.map( (tag) => (                   
                    <div className="w-full flex gap-3 mb-2">
                    <input
                      className="
                        peer relative appearance-none shrink-0 w-6 h-6 border-3 rounded-sm ring-2 ring-gray-800 bg-white
                    focus:ring-offset-5 focus:ring-1 focus:ring-blue-800 focus:outline-dotted focus:outline-2 focus:outline-offset-2
                        checked:bg-gray-800 checked:border-1
                        disabled:border-steel-400 disabled:bg-steel-400
                      "
                      type="checkbox"
                      key={tag.id + Date.now()} 
                      id={tag.id.toString()} 
                      name="tagname" 
                      value={tag.name}
                      onChange={(e) => {
                        const newTags = taskData.tags.includes(e.target.value)
                          ? taskData.tags.filter(tag => tag !== e.target.value)
                          : [...taskData.tags, e.target.value];
                        settaskData(prevState => ({
                          ...prevState,
                          tags: newTags,
                        }));
                      }}
                      checked={ taskData.tags.indexOf(tag.name) !== -1 }
                    />
                    <svg
                      className="absolute w-6 h-6 pointer-events-none hidden peer-checked:block stroke-white outline-none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <label htmlFor={tag.id.toString()}>
                      {tag.name}
                    </label>
                  </div>                    
                  ))
                }
              </fieldset>  
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
                defaultValue={taskData.initDate}
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
            <div className="flex flex-col mb-4">            
              <label className="text-gray-900 mb-1" htmlFor={idElem+'_comments'}>Description</label>
              <textarea className="bg-gray-800 text-white p-2 rounded-md" 
                id={idElem+'_comments'} 
                name="taskduedate"  
                required 
                onChange={(e) => settaskData(prevState => ({
                  ...prevState,
                  comment: e.target.value,
                }))}
                value={taskData.comment}
              ></textarea> 
            </div>
            <div className="flex flex-col mb-4">            
              <label className="text-gray-900 mb-1" htmlFor={idElem+'_status'}>Status</label>
              <select className="bg-gray-800 text-white p-2 rounded-md" 
                id={idElem+'_status'} 
                name="tasktags"
                required 
                onChange={(e) => settaskData(prevState => ({
                  ...prevState,
                  status: e.target.value as statusEnum,
                }))}
                value={taskData.status}
              >
                {
                  statuses.map( (status) => (
                    <option key={status + Date.now()} value={status}>{status}</option>
                  ))
                }
              </select>  
            </div>
            <div className="flex flex-row justify-center content-between">
            <button className="bg-white text-blue-900 p-2 rounded-md w-28" type="submit">Close</button>              
              <button className="bg-blue-900 text-white p-2 rounded-md w-28" type="submit">{modalInfo.isEdited? 'Edit':'Create'}</button>  
            </div>
          </form>
        </div>
    </div>
    
  )
}

import TaskType from "../Interfaces/TasksType";
import { useDispatch } from 'react-redux';
import { OPEN_EDIT_MODAL, OPEN_REMOVE_MODAL } from '../Constants/reducerConstants';
export const TaskComponent = ({id, category, name, initDate, dueDate, comment, tags, url, status}:TaskType) => {
  const dispatch = useDispatch();
  const handleEdit = ({id, category, name, initDate, dueDate, comment, tags, url, status}:TaskType) => {
    dispatch({type: OPEN_EDIT_MODAL, payload: {id,category, name, initDate, dueDate, comment, tags, url, status}})
  };
  const handleRemove = ({id, category, name, initDate, dueDate, comment, tags, url, status}:TaskType) => {
    dispatch({type: OPEN_REMOVE_MODAL, payload: {id,category, name, initDate, dueDate, comment, tags, url, status}})
  };
  return (
    <section className="max-w-sm rounded overflow-hidden shadow-lg"> 
        <div className="px-6 py-4">
            <h3 className="font-bold text-xl pb-2">{name}</h3>
            <div className="pt-4 pb-2 border-y-2 border-gray-600 my-2 ">
                {tags ? tags.map((tag) => (
                    <span key={tag+Date.now} className="inline-block  text-cyan-950 px-3 py-1 text-center text-sm font-semibold mb-2">
                        #{tag}
                    </span>
                )) : null}            
            </div>
            <p className="text-black py-2"><span className="font-bold">Init Date</span> {initDate}</p>
            <p className="text-black py-2"><span className="font-bold">Due Date</span> {dueDate}</p>
            <p className="text-black py-2 text-base border-t-2 border-gray-600">
                {comment}
            </p>
            <p className="text-black py-2 text-base border-t-2 border-gray-600 font-extrabold tracking-wide">{status}</p>
        </div>
        <div className="p-3 bg-cyan-500 flex justify-between">
            <button type="button" onClick={() => handleEdit({id, category, name, initDate, dueDate, comment, tags, url, status})} className="bg-white w-1/3 text-black font-semibold p-3 rounded-full border-2 border-black hover:bg-black hover:text-white focus-within:bg-black focus-within:text-white hover:border-white focus-within:border-white">Edit <span className="sr-only">{name}</span></button>
            <button type="button" onClick={() => handleRemove({id, category, name, initDate, dueDate, comment, tags, url, status})} className="bg-black w-1/3 text-white font-semibold p-3 rounded-full border-2 border-white hover:bg-white hover:text-black focus-within:bg-white focus-within:text-black hover:border-black focus-within:border-black">Remove <span className="sr-only">{name}</span></button>
        </div>        
    </section>
  )
}

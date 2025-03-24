import { useId } from "react";
import ModalType from "../Interfaces/ModalType";
import TaskType from "../Interfaces/TasksType";

interface ConfirmCompInterface {
  modalInfo: ModalType,
  handleClose: () => void,
  handleRemove: (task: TaskType) => void
}

export const ConfirmComp = ({modalInfo, handleClose, handleRemove}:ConfirmCompInterface) => {
    const idElem = useId(); 
  return (
    <div hidden={!modalInfo.isVisible} className="backdrop-opacity-10 backdrop-invert bg-black/60 fixed inset-0">
        <div aria-modal="true"  role="dialog" tabIndex={-1} className="bg-white relative translate-y-[50px] transition-all duration-300 ease-in-out opacity-100 w-full mt-7 p-6 lg:max-w-[500px] lg:mx-auto" aria-labelledby={idElem+ "modalTitle"}>
          <h2 id={idElem+ "modalTitle"} className='font-semibold text-xl mb-2'>Are you sure you want to remove {modalInfo.task.name}?</h2>
          <div className="flex flex-row justify-center content-between">
              <button className="bg-white text-blue-900 p-2 rounded-md w-28" type="button" onClick={()=> {handleClose()}}>Close</button>              
              <button className="bg-blue-900 text-white p-2 rounded-md w-28" type="button" onClick={()=> {handleRemove()}}>Remove</button>  
          </div>
        </div>
    </div>
  )
}

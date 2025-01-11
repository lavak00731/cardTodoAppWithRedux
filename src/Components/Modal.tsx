import { useId } from 'react'

export const Modal = () => {
    const idElem = useId();
    
  return (
    <div className="backdrop-opacity-10 backdrop-invert bg-white/30">
        <div aria-modal="true" hidden={isVisible} role="dialog" tabIndex={-1} className="bg-white" aria-labelledby={idElem+ "modalTitle"}>
            
        </div>
    </div>
    
  )
}

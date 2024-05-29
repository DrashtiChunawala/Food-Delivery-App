import  { useRef,useEffect } from 'react'
import { createPortal } from 'react-dom'


const Modal = ({children,open,onClose,className}) => {

    const modal=useRef();

    useEffect(() => {
        const dialogModal=modal.current
        if (open) {
            dialogModal.showModal(); 
        } 
        return ()=>dialogModal.close();
 
    }, [open]);
    

    
  return (
    createPortal(
        <dialog ref={modal} className={`modal ${className}`} onClose={onClose}>{children}</dialog>,
        document.getElementById('modal')
    )
  )
}

export default Modal

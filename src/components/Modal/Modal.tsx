import close from "../../assets/icons/circle-xmark-regular.svg";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { closeModal } from "../../redux/movies/moviesSlice";
import "./modal.css";
import React from "react";

interface ModalProps {
  children: React.ReactNode;
}

/**
 * Functional react component for Modal
 * @description can be used to display any child component as a modal 
 * @param {React.ReactNode} - children : component that needs to be wrapped into Modal
 * @return {JSX.Element} 
 */
const Modal = ({ children }: ModalProps):JSX.Element => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <div className="modal">
        <div className="modal-header">
          <img
            data-testid="close-icon"
            src={close}
            alt="Close Icon"
            onClick={() => handleClose()}
          />
        </div>
        {children}
        <div className="modal-footer">
          <button type="button" onClick={() => handleClose()}>
            Done
          </button>
        </div>
      </div>
      <div className="modal-backdrop"></div>
    </>
  );
};

export default Modal;

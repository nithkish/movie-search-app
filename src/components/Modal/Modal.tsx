import close from "../../assets/icons/circle-xmark-regular.svg";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { closeModal } from "../../redux/movies/moviesSlice";
import "./modal.css";
import React from "react";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
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

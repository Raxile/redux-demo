import React from "react";
import "./Modal.css";

const Modal = ({
  isModalVisible = false,
  setIsModalVisible = () => {},
  showModalBtn = false,
  children = <p>sample text </p>,
  setConfirmLogic = () => {},
  setCancelLogic = () => {},
}) => {
  return (
    <section>
      <div
        className={`modal-container ${!isModalVisible ? "display-none" : ""}`}
        id="modal-id"
      >
        <div className="backdrop"></div>
        <div className="custom-modal">
          <div className="modal-header">
            <div id="closeIcon" onClick={() => setIsModalVisible(false)}>
              <span className="line-1"></span>
              <span className="line-2"></span>
            </div>
          </div>
          <div className="modal-body">{children}</div>
          {showModalBtn && (
            <div className="modal-footer">
              <button
                className="btn-cancel btn"
                onClick={() => {
                  setCancelLogic();
                }}
              >
                Cancel
              </button>
              <button
                className="btn btn-confirm"
                onClick={() => {
                  setConfirmLogic();
                }}
              >
                confirm
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Modal;

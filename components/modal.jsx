import React from "react";

export const Modal = ({ children, onClose }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleClose = () => {
    onClose();
    setIsOpen(false);
  };

  return (
    <div>This is the modal content.
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={handleClose}>Close</button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
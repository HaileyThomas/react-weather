import React from "react";
import { Icon } from "@iconify/react";

import Saved from "../Saved";

const SavedModal = ({ showSaved, onClose, setCity }) => {
  if (!showSaved) {
    return null;
  }

  return (
    <div className="saved-modal-container" onClick={onClose}>
      <div className="saved-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="saved-modal-header">
          <Icon icon="ep:close-bold" className="close-icon" onClick={onClose} />
        </div>
        <div className="saved-modal-body">
          <Saved setCity={setCity} />
        </div>
      </div>
    </div>
  );
};

export default SavedModal;

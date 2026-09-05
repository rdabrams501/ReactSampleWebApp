import { useEffect, useState } from "react";
import type { IStaffData } from "../services/IStaffData";
import { handleStaffPost } from "../services/SchoolService";

type StaffModalProps = {
    onToggleModal: () => void;
    modalState: boolean;
}

function StaffModal( {onToggleModal, modalState}: StaffModalProps) {

  // Close on Escape key press
  useEffect(() => {
    const handleEsc = (e:any) => {
      if (e.key === "Escape") onToggleModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onToggleModal]);

  const handleStaffSubmit = (e: any) =>
  {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let staffToInsert: IStaffData = {
      id: undefined,
      name: formData.get("staffName") as string, 
      title: formData.get("staffTitle") as string, 
      status: formData.get("staffStatus") as string, 
      notes: formData.get("staffNotes") as string
     };
     console.log(staffToInsert);
     handleStaffPost(staffToInsert);
  }

  return (
    <>
      <div className="modal show fade d-block" id="staffModal" tabIndex={-1} aria-labelledby="staffModalLabel" aria-hidden="true" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staffModalLabel">Add Staff</h1>
              <button type="button" className="btn-close" onClick={onToggleModal}  aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleStaffSubmit} className="row g-3 m-2">
                <div className="form-group">
                    <label htmlFor="staffName">Staff Name:</label>
                    <input type="text" className="form-control" id="staffName" name="staffName" aria-describedby="staffNameHelp" placeholder="Enter Staff Name" pattern="[a-zA-Z, ]*" title="Field must have a minimum of 3 characters and use only letters, commas, or spaces"/>
                    <label htmlFor="staffTitle">Staff Title:</label>
                    <input type="text" className="form-control" id="staffTitle" name="staffTitle" aria-describedby="staffTitleHelp" placeholder="Enter Staff Title" pattern="[a-zA-Z]*" title="Field must have a minimum of 3 characters and use only letters"/>
                    <div className="form-group">
                      <label htmlFor="staffStatus">Staff Status:</label>
                      <select className="form-control" id="staffStatus" name="staffStatus">
                          <option>Active</option>
                          <option>Inactive</option>
                      </select>
                    </div>
                    <label htmlFor="staffNotes">Staff Notes:</label>
                    <input type="text" className="form-control" id="staffNotes" name="staffNotes" aria-describedby="staffNotesHelp" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onToggleModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaffModal;
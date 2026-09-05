import { useEffect, useState } from "react";
import type { IStaffData } from "../services/IStaffData";
import { handleStaffEdit, handleStaffPost } from "../services/SchoolService";

type StaffEditModalProps = {
    onModalClose: () => void;
    oldStaffData: IStaffData;
}

function StaffEditModal( { onModalClose, oldStaffData}: StaffEditModalProps) {

  // Close on Escape key press
  useEffect(() => {
    const handleEsc = (e:any) => {
      if (e.key === "Escape") onModalClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onModalClose]);

  const handleStaffEditSubmit= (e: any) =>
  {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    let staffToEdit: IStaffData = {
        id: oldStaffData.id,
      name: formData.get("staffName") as string, 
      title: formData.get("staffTitle") as string, 
      status: formData.get("staffStatus") as string, 
      notes: formData.get("staffNotes") as string
     };
     console.log(staffToEdit);
     handleStaffEdit(staffToEdit);
  }

  return (
    <>
      <div className="modal show fade d-block" id="staffModal" tabIndex={-1} aria-labelledby="staffModalLabel" aria-hidden="true" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staffModalLabel">Add Staff</h1>
              <button type="button" className="btn-close" onClick={onModalClose}  aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleStaffEditSubmit} className="row g-3 m-2">
                <div className="form-group">
                    <label htmlFor="staffId">Staff ID:</label>
                    <input type="number" className="form-control" id="staffId" name="staffId" aria-describedby="staffNameHelp" pattern="[a-zA-Z, ]*" defaultValue={oldStaffData.id} disabled/>
                    <label htmlFor="staffName">Staff Name:</label>
                    <input type="text" className="form-control" id="staffName" name="staffName" aria-describedby="staffNameHelp" defaultValue={oldStaffData.name} title="Field must have a minimum of 3 characters and use only letters, commas, or spaces"/>
                    <label htmlFor="staffTitle">Staff Title:</label>
                    <input type="text" className="form-control" id="staffTitle" name="staffTitle" aria-describedby="staffTitleHelp" defaultValue={oldStaffData.title} title="Field must have a minimum of 3 characters and use only letters"/>
                    <div className="form-group">
                      <label htmlFor="staffStatus">Staff Status:</label>
                      <select className="form-control" id="staffStatus" name="staffStatus">
                          <option selected={oldStaffData.status === "Active" ? true:false}>Active</option>
                          <option selected={oldStaffData.status === "Inactive" ? true:false}>Inactive</option>
                      </select>
                    </div>
                    <label htmlFor="staffNotes">Staff Notes:</label>
                    <input type="text" className="form-control" id="staffNotes" name="staffNotes" defaultValue={oldStaffData.notes} aria-describedby="staffNotesHelp" />
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onModalClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StaffEditModal;
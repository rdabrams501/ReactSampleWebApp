import { useEffect, useState } from "react";
import type { IStaffData } from "../services/IStaffData";

type StaffModalProps = {
    onToggleModal: () => void;
    handlePost: (staffData: any) => void;
    modalState: boolean;
    staffResponse?: Response;
}

function StaffModal( {onToggleModal, handlePost, staffResponse}: StaffModalProps) {

  const [isOkResponse, setIsOkResponse] = useState(false);
  const [isBadResponse, setIsBadResponse] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Close on Escape key press
  useEffect(() => {
    const handleEsc = (e:any) => {
      if (e.key === "Escape") onToggleModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onToggleModal]);

  useEffect(() => {
    if(staffResponse && staffResponse.ok)
    {
      setIsOkResponse(true);
      setIsBadResponse(false);
    }
    else
    {
      setIsOkResponse(false);
      setIsBadResponse(true);
    }
  }, [staffResponse]);

  const handleStaffSubmit = async (e: any) =>
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
     //console.log(staffToInsert);
     handlePost(staffToInsert);
     setIsFormSubmitted(true);
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
                    <input type="text" className="form-control" id="staffName" name="staffName" aria-describedby="staffNameHelp" minLength={3} required placeholder="Enter Staff Name" pattern="[a-zA-Z, ]*" title="Field must have a minimum of 3 characters and use only letters, commas, or spaces"/>
                    <label htmlFor="staffTitle">Staff Title:</label>
                    <input type="text" className="form-control" id="staffTitle" name="staffTitle" aria-describedby="staffTitleHelp" minLength={3} required placeholder="Enter Staff Title" pattern="[a-zA-Z]*" title="Field must have a minimum of 3 characters and use only letters"/>
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
                {isOkResponse && isFormSubmitted && <p className="text-success">New person successfully added to staff!</p>}
                {isBadResponse && isFormSubmitted && <p className="text-danger">Failed to add person to staff! Please try again or contat admin!</p>}
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
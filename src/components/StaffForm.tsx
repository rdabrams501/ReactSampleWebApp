
type StaffFormProps = {
    getAllStaffFunc: () => void;
    modalToggler: () => void;
    getStaffName: (name: string) => void;
}

function StaffForm ({getAllStaffFunc, getStaffName, modalToggler} : StaffFormProps){
    
    const handleStaffFormSubmit = (e:any) =>
    {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const rawStaffName = formData.get("staffName");
        const staffName= rawStaffName ? rawStaffName.toString() : "a";
        //console.log(staffName);
        getStaffName(staffName);
    }

    return <>
        <form onSubmit={handleStaffFormSubmit} className="row g-3 m-2">
            <div className="form-group col-md-4">
                <label htmlFor="staffName">Staff Name:</label>
                <input type="text" className="form-control" id="staffName" name="staffName" aria-describedby="staffNameHelp" placeholder="Enter Staff Name" pattern="[a-zA-Z, ]*" title="Field must have a minimum of 3 characters and use only letters, commas, or spaces"/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-secondary m-1" onClick={getAllStaffFunc}>Get all Staff</button>
                <button type="button" className="btn btn-secondary m-1" onClick={modalToggler}>Add Staff</button>
            </div>
        </form>
    </> 
}

export default StaffForm;
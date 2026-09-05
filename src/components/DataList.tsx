import { useEffect, useState } from "react";
import type { DataColumn } from "../services/DataColumn";
import type { IStaffData } from "../services/IStaffData";
import { handleStaffDelete } from "../services/SchoolService";
import StaffEditModal from "./StaffEditModal";

//Data table prop definitions
interface DataListProps {
    cols: DataColumn[];
    data: any[];
}

//Simple reuseable data table where you provide headers and data
function DataList({cols, data} : DataListProps)
{
    const [updatedData, setUpdatedData] = useState<any[]>([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [staffToEdit, setStaffToEdit] = useState<IStaffData>();


    useEffect(() => {
        console.log(data);
        if(data !== undefined)
        {
            setUpdatedData([...data]);
        } 
    }, [data]);

    //should reunify with staff page for these calls
    const handleDelete = (staffData: any) => {
        console.log(staffData);
        let staffToDelete: IStaffData = {
              id: staffData.id as number,
              name: staffData.name as string, 
              title: staffData.title as string, 
              status: staffData.status as string, 
              notes: staffData.notes as string
             };
             console.log(staffToDelete);
             handleStaffDelete(staffToDelete);
    }

    const openEditModal = (item: any) =>
    {
        let staffData: IStaffData = {
              id: item.id as number,
              name: item.name as string, 
              title: item.title as string, 
              status: item.status as string, 
              notes: item.notes as string
             };
        setStaffToEdit(staffData);
        setShowEditModal(true);
    }

    const closeEditModal = () =>
    {
        setShowEditModal(false);
    }

    return (
        <>
        {showEditModal && <StaffEditModal onModalClose={closeEditModal}  oldStaffData={staffToEdit as IStaffData}/>}
        <div className="m-3">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    {cols.map((header) => (<th scope="col">{header.header}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {updatedData.map((item) => (
                        <tr key={Object.values(item)[0] as any}>
                            {cols.map((col) => (
                                <td key={col.key} scope="col">
                                    {col.key === "commands" ? (
                                        item.id > 6 ? (
                                             <div className="btn-group" role="group" aria-label="edit and delete">
                                                <button type="button" className="btn btn-secondary" onClick={() => openEditModal(item) }>Edit</button>
                                                <button type="button" className="btn btn-secondary" onClick={() => handleDelete(item)}>Delete</button>
                                            </div>
                                        ) : (
                                           <div className="btn-group" role="group" aria-label="edit">
                                                <button type="button" className="btn btn-secondary">Edit</button>
                                            </div>
                                        )
                                    ) : item[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </>

    )

}

export default DataList;
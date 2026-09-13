import { useState } from "react";
import DataList from "../components/DataList";
import StaffForm from "../components/StaffForm";
import type { IStaffData } from "../services/IStaffData";
import { fetchData, handleStaffDelete, handleStaffEdit, handleStaffPost } from "../services/SchoolService";
import StaffModal from "../components/StaffModal";

function Staff() {

    const [staffData, setStaffData] = useState<IStaffData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isStaffLoaded, setIsStaffLoaded] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [dataResponse, setDataResponse] = useState<Response>();
    const headers = [{header:"Commands", key:"commands"}, {header:"ID", key:"id"}, {header:"Name", key:"name"}, {header:"Title", key:"title"}, {header:"Status", key:"status"}, {header:"Notes", key:"notes"}];

    const fetchAllStaff = async () => {
            try {
                setIsLoading(true);
                const urlPasser = "https://webappapitest3.azurewebsites.net/Staff";
                console.log(urlPasser);
                const staffs = await fetchData(urlPasser);
                setStaffData(staffs);
                setIsLoading(false);
                setIsStaffLoaded(true);
            } catch (error) {
                alert(error);
                console.error('Error fetching data:', {error});
            }
        };
    const fetchStaffName = async (name: string) =>{

        try {
                setIsLoading(true);
                const urlPasser = "https://webappapitest3.azurewebsites.net/Staff/searcher/" + name;
                console.log(urlPasser);
                const staffs = await fetchData(urlPasser);
                setStaffData(staffs);
                setIsLoading(false);
                setIsStaffLoaded(true);
            } catch (error) {
                alert(error);
                console.error('Error fetching data:', {error});
            }
    }
    const postStaff = async (staffToPost: any) => 
    {
        try{
            const response = handleStaffPost(staffToPost);
            console.log(response);
            setDataResponse(await response);
            await new Promise(resolve => setTimeout(resolve, 100));
            fetchAllStaff();
        }
        catch (error) {
            alert(error);
            console.error('Error posting data:', {error});
        }
    }
    const editStaff = async (staffToEdit: any) => 
    {
        try{
            const response = handleStaffEdit(staffToEdit);
            console.log(response);
            setDataResponse(await response);
            await new Promise(resolve => setTimeout(resolve, 100));
            fetchAllStaff();
        }
        catch (error) {
            alert(error);
            console.error('Error editing data:', {error});
        }
    }
    const deleteStaff = async (staffToDelete: any) => 
    {
        try{
            handleStaffDelete(staffToDelete);
            await new Promise(resolve => setTimeout(resolve, 100));
            fetchAllStaff();
        }
        catch (error) {
            alert(error);
            console.error('Error deleting data:', {error});
        }
    }

        const toggleModal = () =>
        {
            setShowModal(!showModal);
            //console.log(showModal);
        }

    return <>
        <div className="m-3">
            <div className="container-fluid p-3 rounded-3 bg-secondary-subtle">
            <h1>Staff Search</h1>
            <hr className="my-4"/>
            <p>Enter staff name below to search for desired teachers in the school.</p> <br/>
            <p>It will search the Azure SQL staff table in the database.</p>
            </div>
        </div>
        <StaffForm getAllStaffFunc={fetchAllStaff} getStaffName={fetchStaffName} modalToggler={toggleModal}/>
        {showModal && <StaffModal onToggleModal={toggleModal} handlePost={postStaff} staffResponse={dataResponse} modalState={showModal}/>}
        {isLoading === true && <div className="spinner-border mx-auto d-block text-primary" role="status"> <span className="visually-hidden">Loading...</span></div>}
        <DataList cols={headers} handleDelete={deleteStaff} resultResponse={dataResponse} handleEdit={editStaff} data={staffData}></DataList>
    </>
}

export default Staff;
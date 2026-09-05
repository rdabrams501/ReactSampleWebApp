import { useState } from "react";
import CourseForm from "../components/CourseForm";
import type { ICourseData } from "../services/ICourseData";
import { fetchData } from "../services/SchoolService";
import DataList from "../components/DataList";

function Courses()
{
    const [courseData, setCourseData] = useState<ICourseData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isCourseLoaded, setIsCourseLoaded] = useState(false);
    const headers = [{header:"Course ID", key:"id"}, {header:"Name", key:"name"}, {header:"Teacher ID", key:"teacherID"}, 
        {header:"Student Count", key:"studentCount"}, {header:"Start Date", key:"startDate"}, {header:"End Date", key:"endDate"},
        {header:"Notes", key:"notes"}, {header:"Staff Name", key:"staff"}, {header:"Position", key:"position"},
        {header:"Status", key:"status"}];
    
    const fetchCourses = async (cId: number, tName: string, sNum: number) => {
        try {
            setIsLoading(true);
            const urlPasser = "https://webappapitest3.azurewebsites.net/Courses/" + cId + "/" + tName + "/" + sNum;
            console.log(urlPasser);
            const courses = await fetchData(urlPasser);
            setCourseData(courses);
            setIsLoading(false);
            setIsCourseLoaded(true);
        } catch (error) {
            alert(error);
            console.error('Error fetching data:', {error});
        }
    };

    /*const handleDatafromCourseForm = (cId: number, tName: string, sNum: number) =>
    {
        fetchCourses(formData);
    }*/

    return (
    <>
        <div className="m-3">
            <div className="container-fluid p-3 rounded-3 bg-secondary-subtle">
            <h1>Courses Search</h1>
            <hr className="my-4"/>
            <p>Please search for courses below</p>
            </div>
        </div>
        <CourseForm sendFormDataToParent={fetchCourses}/>
        {isCourseLoaded === true && courseData && courseData.length === 0 && <div className="text-danger fw-bold text-center">Request yielded no results Please try again.</div>}
        {isLoading === true && <div className="spinner-border mx-auto d-block text-primary" role="status"> <span className="visually-hidden">Loading...</span></div>}
        <DataList cols={headers} data={courseData}></DataList>
    </>);
    
}

export default Courses
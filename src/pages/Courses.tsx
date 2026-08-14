import { useState } from "react";
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";
import type { ICourseData } from "../services/ICourseData";
import { fetchData } from "../services/SchoolService";

function Courses()
{
    const [courseData, setCourseData] = useState<ICourseData[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const fetchCourses = async (cId: number, tName: string, sNum: number) => {
        try {
            setIsLoading(true);
            const urlPasser = "https://webappapitest3.azurewebsites.net/Courses/" + cId + "/" + tName + "/" + sNum;
            console.log(urlPasser);
            const courses = await fetchData(urlPasser);
            setCourseData(courses);
            setIsLoading(false);
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
        {isLoading === true && <div className="spinner-border mx-auto d-block text-primary" role="status"> <span className="visually-hidden">Loading...</span></div>}
        {/*<button onClick={fetchCourses}>Get Courses</button>*/}
        <CourseList course={courseData}/>
    </>);
    
}

export default Courses
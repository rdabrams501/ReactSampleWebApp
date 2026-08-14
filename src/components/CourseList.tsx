import { useEffect, useState } from "react";
import type { ICourseData } from "../services/ICourseData";

    //not reuseable will need to refactor ONLY FOR TESTING PURPOSES!!!
function CourseList({ course })
{

    //PAGE RENDERING IS WRONG NEEDS TO MANAGE STATE
    const [courseList, setCourseList] = useState([]);


    useEffect(() => {
        console.log(course);
        if(course !== undefined)
        {

            setCourseList([...course]);
        } 
    }, [course]);

    //TRY THIS AGAIN LATER TO FIGURE OUT HOW TO HANDLE CASE
    /*useEffect(() => {
        
    fetchCourses();
    },[fetch]);*/

    return (
        <>
        {courseList.length === 0 && <div className="text-danger fw-bold text-center">Request yielded no results! Please try again.</div>}
        <div className="m-3">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th scope="col">Course ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Teacher ID</th>
                    <th scope="col">Student Count</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Notes</th>
                    <th scope="col">Staff Name</th>
                    <th scope="col">Position</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    courseList.map((item) =>
                    (
                        <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.name}</td>
                        <td>{item.teacherID}</td>
                        <td>{item.studentCount}</td>
                        <td>{item.startDate}</td>
                        <td>{item.endDate}</td>
                        <td>{item.notes}</td>
                        <td>{item.staff}</td>
                        <td>{item.position}</td>
                        <td>{item.status}</td>
                        </tr>
                    ))}  
                </tbody>
            </table>
            </div>
        </>

    )
    

}

export default CourseList;
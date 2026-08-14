import { useEffect, useState } from "react";
import type { ICourseData } from "../services/ICourseData";


function CourseList({course} : {course: ICourseData[]})
{
    const [courseList, setCourseList] = useState<ICourseData[]>([]);


    useEffect(() => {
        console.log(course);
        if(course !== undefined)
        {
            setCourseList([...course]);
        } 
    }, [course]);

    return (
        <>
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
                        <td>{item.startDate?.toString()}</td>
                        <td>{item.endDate?.toString()}</td>
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
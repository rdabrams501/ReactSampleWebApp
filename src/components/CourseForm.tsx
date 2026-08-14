import { useState } from "react";
import type { ICourseData } from "../services/ICourseData";

function CourseForm( {sendFormDataToParent})
{
     function handleOnSubmit(e)
     {
        e.preventDefault();
        const formData = new FormData(e.target);

        const rawCourseId = formData.get("courseId");
        const rawStaffName = formData.get("staffName");
        const rawStudentNum = formData.get("studentNum");

        const courseId = rawCourseId ? Number(rawCourseId) : 0;
        const staffName= rawStaffName ? rawStaffName.toString() : "a";
        const studentNum = rawStudentNum ? Number(rawStudentNum) : 0;

        console.log(courseId + " " + staffName + " " + studentNum);

        sendFormDataToParent(courseId, staffName, studentNum);
     }



    return(
        <>
        <form onSubmit={handleOnSubmit} className="row g-3 m-2">
            <div className="form-group col-md-12">
                <label htmlFor="courseId">Course ID:</label>
                <input type="number" className="form-control" id="courseId" name="courseId" aria-describedby="courseIdHelp" placeholder="Enter Course ID" min="1" max="9999"/>
            </div>
                <div className="form-group col-md-6">
                <label htmlFor="staffName">Staff Name:</label>
                <input type="text" className="form-control" id="staffName" name="staffName"  minLength={3} pattern="[a-zA-Z, ]*" title="Field must have a minimum of 3 characters and use only letters, commas, or spaces"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="staffName">Number of Student Enrolled:</label>
                    <select className="form-control" id="studentNum" name="studentNum">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
        </>
    );
}

export default CourseForm;
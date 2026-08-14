//REFASCTOR TO MATCH API OBJ teatherID, ednDate etc...

export interface ICourseData{
    id: number | null;
    name: string | null;
    teacherID: number | null;
    studentCount: number | null;
    startDate: Date | null;
    endDate: Date | null;
    notes?: string | null;
    staff: string | null;
    position: string | null;
    status: string | null;
    }
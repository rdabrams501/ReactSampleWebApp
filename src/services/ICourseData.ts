//REFASCTOR TO MATCH API OBJ teatherID, ednDate etc...

export interface ICourseData{
    id: number | null;
    name: string | null;
    teacherid: number | null;
    studentcount: number | null;
    startdate?: Date | null;
    enddate?: Date | null;
    notes?: string | null;
    staff: string | null;
    position: string | null;
    status: string | null;
    }
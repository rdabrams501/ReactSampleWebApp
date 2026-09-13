import type { IStaffData } from "./IStaffData";

export async function fetchData (url: string) {
        try {
            const dataList = await fetch(url);
            if (!dataList.ok) throw new Error('Network response was not ok');
            //console.log(dataList); //for debugging
            const dataJsonList = await dataList.json();
            //console.log(dataJsonList);
            return dataJsonList;
        } 
        catch (error: any) {
            if(error.message.includes("Failed to fetch"))
            {
                alert('Failure to connect to API! Azure web app may not be running please contact website admin.');
            }
            else
            {
                alert('Failed to load database info! Likely a timeout please try again.');
            }
            console.error('Error fetching data:', {error});
        }
    };

export async function handleStaffPost(stafftoPost: IStaffData) {
        try{
            const response = await fetch ('https://webappapitest3.azurewebsites.net/Staff', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(stafftoPost),
            });
            console.log(response);
            return response;
        }
        catch (error: any) {
           console.error('Error posting: ', error);
        }
    };

export async function handleStaffDelete(stafftoDelete: IStaffData) {
        try{
            const response = await fetch ('https://webappapitest3.azurewebsites.net/Staff/delete', {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(stafftoDelete),
            });
            console.log(response);
        }
        catch (error: any) {
           console.error('Error posting: ', error);
        }
}

export async function handleStaffEdit(stafftoEdit: IStaffData) {
        try{
            const response = await fetch ('https://webappapitest3.azurewebsites.net/Staff', {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(stafftoEdit),
            });
            console.log(response);
            return response;
        }
        catch (error: any) {
           console.error('Error posting: ', error);
        }
}
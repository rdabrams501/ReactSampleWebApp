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
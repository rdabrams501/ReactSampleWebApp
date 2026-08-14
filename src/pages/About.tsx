import { useState, useEffect } from 'react';

function About()
{
    const [currentNum, setCurrentNum] = useState(() => {
    // Read from storage on initial render
    const saved = localStorage.getItem('myData');
    return saved ? JSON.parse(saved) : '0';
    });

    useEffect(() => {
    // Write to storage whenever data changes
    localStorage.setItem('myData', JSON.stringify(currentNum));
    }, [currentNum]);


    return <>
    <h5 className="m-2">About School Web App!</h5>
        <p className="m-2">
        Made by Richard Abrams<br/>
        Contact me at: rdabrams501@gmail.com
        </p>

        <div className="p-2">
            <h6>Sources:</h6>
            <p>
                Github repo for the Web App: <a href="https://github.com/rdabrams501/ReactSampleWebApp">School Web App source</a> <br/>
                Github repo for the REST API: <a href="https://github.com/rdabrams501/.Net-Core-REST-API">REST API source</a>
            </p>
        </div>

        <p className="m-2">Current count: <strong>{currentNum}</strong></p>

        <div className="m-2">
            <div className="btn-group" role="group" aria-label="Basic example"  >
                <button type="button" className="btn btn-secondary" onClick={() => setCurrentNum(currentNum+1)}>Increment</button>
                <button type="button" className="btn btn-secondary" onClick={() => setCurrentNum(currentNum-1)}>Decrement</button>
                <button type="button" className="btn btn-secondary" onClick={() => setCurrentNum(0)}>Reset</button>
            </div>
        </div>

    </>
    
}

export default About;
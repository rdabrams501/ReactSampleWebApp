import { Link } from "react-router";
import schoolImg from  "../assets/guvo59-high-school-Fixed.jpg";

function Home()
{
    return <>
            <div className="m-1 text-center page-header">
            <h4>Welcome to the School Web App</h4>
            </div>
            <p className="m-1 text-center text-start">
                This is a sample React SPA web app with a REST API that talks to an Azure SQL database.
            </p>
            <img className="img-fluid mx-auto d-block" src={schoolImg} alt="Brick school"/>
            <p className="m-1 text-center text-start"> You can get <Link to="/courses">course</Link> information or find out more <Link to="/about">about</Link> this app.</p>
    </>
    
}

export default Home;
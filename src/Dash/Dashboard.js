import react from 'react';
import img from "../img/db.png";
import NormalLoginForm from './Login'

const Dashboard = () => {
return(
    <>
        
    <div className="dash">
    <img src={img} class="d-block w-100" alt="image1" />
     <NormalLoginForm/>  
     
   
    </div>
    <div className="dashtext">
    <h1> D.B.WORKSHOP AND IT SUPPORT PVT.LTD </h1>
    <h2> Subidanagar, Tinkune, Kathmandu</h2>
   
    </div>
    </>

    )
};
     
export default Dashboard;
import Header from "../Header/header";
import Anatomy from "../DashboardMainContent/DashboardOverview/AnatomySection/anatomy.jsx";
import Healthstatus from "./DashboardOverview/HealthStatusCards/healthstatus.jsx";

const Main = () => {
  return (
   <div className="row"><div className="col-md-12">
      <Header />
    </div>
    <div className="custom-bg-color col-md-6">
     <Anatomy/>
       
      </div>
      
      <div className="custom-bg-color col-md-6" style={{backgroundColor:' rgb(41, 33, 98);'}}>
     
       
      </div>
      </div>
     
   
  );
};


export default Main;
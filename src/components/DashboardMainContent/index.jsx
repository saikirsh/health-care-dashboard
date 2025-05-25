import Header from "../Header/header";
import Anatomy from "../DashboardMainContent/DashboardOverview/AnatomySection/anatomy.jsx";
import Healthstatus from "./DashboardOverview/HealthStatusCards/healthstatus.jsx";
import Calendar from "./CalendarView/calender.jsx";

const Main = () => {
  return (
   <div className="row"><div className="col-md-12">
      <Header />
    </div>
    
    <div className="custom-bg-color col-md-5">
     <Anatomy/>
       
      </div>
      
      <div className="custom-bg-color col-md-7">
     <Calendar/>
       
      </div>
      </div>
     
   
  );
};


export default Main;
import Header from "../Header/header";
import Anatomy from "../DashboardMainContent/DashboardOverview/AnatomySection/anatomy.jsx";
import Calendar from "./CalendarView/calender.jsx";
import ActivityChart from "./ActivityFeed/activityComponent.jsx";

const Main = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <Header />
      </div>

      <div className="custom-bg-color col-md-5">
        <Anatomy />
        <div className="d-flex">
          <h5>Activity</h5>
          <p className="ml-auto"> 3 appointments on this week</p>
        </div>
        <ActivityChart />
      </div>

      <div className="custom-bg-color col-md-7">
        <Calendar />
      </div>
    </div>
  );
};

export default Main;

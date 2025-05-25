import "./calender.css";
import calender from "../../../assets/images/calender.png";
import Schedule from "../UpcomingSchedule/upcomingschedule";
const Calendar = () => {
  return (
    <>
      <div class="row">
        <div className="col-md-9 ml-auto">
          <img src={calender} className="img-responsive w-100" />
        </div>
      </div>
      <div class="col-md-10 ml-auto row">
        <div className="card text-white col-12 col-sm-6 col-md-4 ml-lg-5 mt-2 custom-card shadow border-0">
          <div className="card-body">
            <p className="card-title">Dentist</p>
            <p className="card-text">09:00-11:00</p>
            <p className="card-text mb-0">Dr. Cameron Williamson</p>
            <span className="position-absolute top-0 end-0 p-3 mt-2">
              🦷 {/* Tooth emoji or an icon */}
            </span>
          </div>
        </div>
        <div className="card col-md-6 col-12 col-sm-6 col-md-4 ml-lg-4 mt-2 custom-card2 shadow border-0">
          <div className="card-body">
            <p className="card-title"> Physiotherapy Appointment</p>
            <p className="card-text">01:00-12:00</p>
            <p className="card-text mb-0">Dr. Kevin Djones</p>
            <span
              role="img"
              aria-label="flexed bicep"
              className="position-absolute top-0 end-0 p-2 mt-2"
            >
              💪
            </span>
          </div>
        </div>
      </div>
      <div class="col-md-10 ml-auto">
        <Schedule />
      </div>
    </>
  );
};

export default Calendar;

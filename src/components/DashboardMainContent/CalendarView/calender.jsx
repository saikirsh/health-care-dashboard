import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
      <div class="col-md-10 ml-auto d-flex">
        <div className="card text-white col-md-4 ml-5 mt-2 custom-card">
          <div className="card-body">
            <p className="card-title">Dentist</p>
            <p className="card-text">09:00-11:00</p>
            <p className="card-text mb-0">Dr. Cameron Williamson</p>
            <span className="position-absolute top-0 end-0 p-3 mt-2">
              🦷 {/* Tooth emoji or an icon */}
            </span>
          </div>
        </div>
         <div className="card col-md-6 mt-2 ml-5 custom-card2">
          <div className="card-body">
            <p className="card-title"> Physiotherapy Appointment</p>
            <p className="card-text">01:00-12:00</p>
            <p className="card-text mb-0">Dr. Kevin Djones</p>
            <span role="img" aria-label="flexed bicep" className="position-absolute top-0 end-0 p-2 mt-2">💪</span>

          </div>
        </div>
      </div>
      <div class="col-md-10 ml-auto">
        <Schedule/>
      </div>
    </>
  );
};

export default Calendar;

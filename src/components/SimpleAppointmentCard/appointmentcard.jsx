const AppointmentCard = () => {
  return (
    <>
      <div className="mt-3 ml-5 col-md-12">
        <h5>The upcoming schedule</h5>
        <h6 className="text-grey">On Thursday</h6>
      </div>
      <div class="col-md-12 d-flex ml-4">
        <div className="card col-md-7 mt-2 custom-card2">
          <div className="card-body">
            <p className="card-title">Health Checkup Complete</p>
            <p className="card-text">11:00 AM</p>
            <span role="img" aria-label="blood sample" className="position-absolute top-0 end-0 p-3 mt-2">🩸</span>
            
          </div>
        </div>
        <div className="card col-md-6 mt-2 ml-5 custom-card2">
          <div className="card-body">
            <p className="card-title">Opthomologist</p>
            <p className="card-text">14:00 PM</p>
            <span role="img" aria-label="eyes" className="position-absolute top-0 end-0 p-3 mt-2">👀</span>
           
          </div>
        </div>
      </div>
      <h6 className="text-grey ml-5 mt-2">On saturday</h6>
       <div class="col-md-12 d-flex ml-4">
        
        <div className="card col-md-7 mt-2 custom-card2">
          <div className="card-body">
            <p className="card-title">Cardialogist</p>
            <p className="card-text">12:00 AM</p>
            <span role="img" aria-label="heart" className="position-absolute top-0 end-0 p-3 mt-2">❤️</span>
        
          </div>
        </div>
        <div className="card col-md-6 mt-2 ml-5 custom-card2">
          <div className="card-body">
            <p className="card-title">Neuroligist</p>
            <p className="card-text">16:00 PM</p>
          <span role="img" aria-label="doctor" className="position-absolute top-0 end-0 p-3 mt-2">🧑‍⚕️</span>

           
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AppointmentCard;

import "./anatomy.css";
import skelton from "../../../../assets/images/skelton.jpg";
import Healthstatus from "../HealthStatusCards/healthstatus";
const Anatomy = () => {
  return (
    <>
      <h2 className="text-blue">Dash Board</h2>
      <div className="row">
        <div class="card col-md-10 border-0">
          <div class="card-body">
            <div className="anatomy-container">
              <img
                src={skelton}
                alt="Anatomical Illustration"
                className="anatomy-image"
              />
            {  <><div className="label heart-label">❤️ Healthy Heart</div><div className="label leg-label">🦵 Healthy Leg</div></> }
            </div>
          </div>
        </div>
        <div class="col-md-1">
       <Healthstatus/>
        </div>
      </div>
    </>
  );
};

export default Anatomy;

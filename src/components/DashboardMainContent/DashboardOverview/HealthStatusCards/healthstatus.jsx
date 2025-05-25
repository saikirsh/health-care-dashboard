import "../HealthStatusCards/healthstatus.css";
import lungs from "../../../../assets/images/lungs.jpg";
import teeth from "../../../../assets/images/teeth.jpg";
import bone from "../../../../assets/images/bone.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
function Healthstatus() {
  return (
    <div class="">
      <div
        className="card text-center mb-4"
        style={{ width: "12rem", margin: "auto" }}
      >
        <div className="card-body">
          <div class="d-flex">
            <img src={lungs} class="card-img-top" alt="Lungs" />
            <h5 className="card-title mt-3 ml-2">Lungs</h5>
          </div>
          <p className="card-text">Date: 26 Okt 2021</p>
          <div className="progress">
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="card text-center mb-4"
        style={{ width: "12rem", margin: "auto" }}
      >
        <div className="card-body">
          <div class="d-flex">
            <img src={teeth} class="card-img-top" alt="Lungs" />
            <h5 className="card-title mt-3 ml-2">Teeth</h5>
          </div>
          <p className="card-text">Date: 26 Okt 2021</p>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
      </div>
      <div
        className="card text-center"
        style={{ width: "12rem", margin: "auto" }}
      >
        <div className="card-body">
          <div class="d-flex">
            <img src={bone} class="card-img-top" alt="Lungs" />
            <h5 className="card-title mt-3 ml-2">Bone</h5>
          </div>
          <p className="card-text">Date: 26 Okt 2021</p>
          <div className="progress">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "50%" }}
            ></div>
          </div>
        </div>
      </div>
      <div
        class="position-relative"
        style={{height: '3rem', border: '0px solid #ccc',left:'6rem'}}
      >
        <button class="btn btn-outline-none position-absolute btn-xl text-primary">
          Details<span class='ml-2'><FontAwesomeIcon icon={faArrowRight}/></span>
        </button>
      </div>
    </div>
  );
}
export default Healthstatus;

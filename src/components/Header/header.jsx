import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faTree,
  fatree,
} from "@fortawesome/free-solid-svg-icons";
import "../Header/header.css";
import face from "../../assets/images/face.png";
import plus from "../../assets/images/plus.png";
const Header = () => {
  return (
    <Nav class="navbar navbar-expand-md navbar-dark">
      <a class="navbar-brand " href="#"></a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse row" id="collapsibleNavbar">
        <form class="form-inline" action="/action_page.php">
          <div class="input-group mb-3 col-md-8">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </div>
          <FontAwesomeIcon icon={faTree} className="col-md-3 custom-blue" />
        </form>
      </div>
      <div className="float-right">
        <img src={face} className="mt-1" />
        <img src={plus} />
      </div>
    </Nav>
  );
};

export default Header;

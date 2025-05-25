import { useState } from "react";
import "../Sidebar/sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faDashboard,
  faArrowsUpDown,
  faCalendar,
  faKitMedical,
  faChartColumn,
  faComment,
  faPhone,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => setSidebarVisible(isSidebarVisible);

  return (
    <>
      <h4 class="d-lg-none mt-1">
        <button
          class="navbar-toggler border"
          type="button"
          data-toggle="collapse"
          data-target=".sidebar"
          aria-expanded="false"
          aria-label="Toggle filters"
        >
          <span>
            <FontAwesomeIcon
              icon={faClose}
              onClick={toggleSidebar}
            ></FontAwesomeIcon>
          </span>
        </button>
      </h4>
      {isSidebarVisible && (
        <div className="sidebar d-lg-block p-2">
          <h2 className="mt-5">
            Health<span style={{ color: "black" }}>care.</span>
          </h2>
          <div class="section">
            <h3>General</h3>
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faDashboard} className="mr-2" />
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faArrowsUpDown} className="mr-2" />
                  History
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                  Calendar
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faKitMedical} className="mr-2" />
                  Appointments
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faChartColumn} className="mr-2" />
                  Statistics
                </a>
              </li>
            </ul>
          </div>
          <div class="section">
            <h3>Tools</h3>
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faComment} className="mr-2" />
                  Chat
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div class="section">
            <h3>Setting</h3>
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faGear} className="mr-2" />
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

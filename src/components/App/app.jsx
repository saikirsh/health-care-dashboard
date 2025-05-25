import "../../index.css";
import Sidebar from "../Sidebar/sidebar";
import Main from "../DashboardMainContent/index";

 function App() {
        return( 
        <div className="container">
        <div className="row custom-wrapper">
           <div className="col-md-2">
              <Sidebar/>
           </div>
              <div className="col-md-10"> 
           <Main/>
           </div>
      </div>
      </div>
        );
      }
export default App;
      


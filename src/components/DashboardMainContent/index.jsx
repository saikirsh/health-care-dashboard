import Header from "../Header/header";
import face from '../../assets/images/face.png';
import plus from '../../assets/images/plus.png';

const Main = () => {
  return (
   <div className="row"><div className="col-md-6">
      <Header />
    </div><div className="custom-bg-color col-md-6">
      <div className="float-right">
         <img src={face} className="mt-1"/>
         <img src={plus}/>
      </div>
       
      </div></div>
     
   
  );
};


export default Main;
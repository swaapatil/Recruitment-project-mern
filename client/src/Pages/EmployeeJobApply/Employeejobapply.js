import { useEffect, useState, useContext } from "react";
import { Data } from "../../Context/Jobpostcontext";
import Navbaremployee from "../../Components/Navbaremployee/Navbaremployee";


const Employeejobapply = () => {
  const { recDetails, getRecDetails } = useContext(Data);

  useEffect(() => {
    getRecDetails();
  }, []);

  return (
    <div>

      <Navbaremployee/>



      <h2>Jobs</h2>
    
      {recDetails &&
        recDetails.map((item) => {
          return (
            <div className="records" key={item._id}>
              <h4>{item.companyName}</h4>
              <p>{item.role}</p>
              <p>{item.technologies}</p>
              <p>{item.experience} -years</p>
              <p>{item.location}</p>
              <p>{item.graduate}</p>
              <p>{item.english}</p>
              <p>{item.noticePeriod} -months</p>
              <button>Apply</button>
              <br/>
              <br/>
              <br/>
            </div>
          );
        })}
    </div>
  );
};

export default Employeejobapply;
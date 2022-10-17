import { useEffect, useState, useContext } from "react";
import { Data } from "../../Context/Jobpostcontext";
import Employerjobpost from "../../Pages/Employerjobpost/Employerjobpost";
import Navbaremployee from "../Navbaremployer/Navbaremployer";


const JobRecords = () => {
  const { recDetails, getRecDetails, deleteRecDetails } = useContext(Data);



  useEffect(() => {
    getRecDetails();
  }, []);

 

  return (
    <div>
      
      
    
    <Employerjobpost/>
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
              <button>Edit</button>
              <button onClick={() => deleteRecDetails(item._id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
};

export default JobRecords;
// import { createContext, useReducer } from "react";

// export const JobsContext = createContext();

// export const jobsReducer = (state, action) => {
//     switch(action.type){
//         case 'GET_JOB':
//             return{
//                 jobs: action.payload
//             }
//         case 'POST_JOB':
//             return{
//                 jobs: [action.payload, ...state.jobs]
//             }
//         // case 'D_JOB':
//         //     return{
//         //         jobs: state.books.filter((b) => b._id !== action.payload._id)
//         //     }
//         default:
//             return state;
//     }
// }
// export const JobsContextProvider = ({children}) => {
//     const [state, dispatch] = useReducer(jobsReducer, {
//         jobs: null
//     })

//     return(
//         <JobsContext.Provider value={{...state, dispatch}}>
//             {children}
//         </JobsContext.Provider>
//     )
// }



import { createContext, useState } from "react";
import axios from "axios";

export const Data = createContext();

const Jobpostcontext = ({ children }) => {
  // GET Details Request State
  const [recDetails, setRecDetails] = useState(null);

  // Getting Details
  const getRecDetails = async () => {
    const response = await axios.get("/api/jobpost");
    const data = response.data;
    // console.log(data);
    setRecDetails(data);
  };

  //POST Details Request State
  const [form, setForm] = useState({
    companyName: "",
    role: "",
    technologies: "",
    experience: "",
    location: "",
    graduate: "",
    english: "",
    noticePeriod: "",
  });

  // DELETE Request State
  const deleteRecDetails = async (_id) => {
    const response = await axios.delete(
      `/api/jobpost/${_id}`
    );
    // console.log(response);
    getRecDetails();
  };

  return (
    <>
      <Data.Provider
        value={{
          recDetails,
          setRecDetails,
          getRecDetails,
          form,
          setForm,
          deleteRecDetails,
        }}
      >
        {children}
      </Data.Provider>
    </>
  );
};

export default Jobpostcontext;
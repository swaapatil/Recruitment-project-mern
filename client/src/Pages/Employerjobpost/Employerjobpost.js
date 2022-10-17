


import { useContext } from "react";
import axios from "axios";
import { Data } from "../../Context/Jobpostcontext";

const Employerjobpost = () => {

    const{
        recDetails,
        setRecDetails,
        getRecDetails,
        form,
        setForm,
        deleteRecDetails,
      } = useContext(Data)


  // POST/CREATE Form function
    const updateFormField = (e) => {
        const { name, value } = e.target;
    
        setForm({
          ...form,
          [name]: value,
        });
      };
    
      // const[selects, setSelects] = useState();
    
      const createRecDetails = async (e) => {
        e.preventDefault();
        const response = await axios.post(
          "/api/jobpost",
          form
        );
        // console.log(response)
        setRecDetails([...recDetails, response.data]);
        setForm({
          companyName: "",
          role: "",
          technologies: "",
          experience: "",
          location: "",
          graduate: "",
          english: "",
          noticePeriod: "",
        });
      };
    
  return (
    <>
   
    
      <form onSubmit={createRecDetails}>
        <div className="jobDetails">
          <label>Company</label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={updateFormField}
            // readOnly={read}
          />
        </div>
        <div className="jobDetails">
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={form.role}
            onChange={updateFormField}
          />
        </div>
        <div className="jobDetails">
          <label>Technology</label>
          <select name="technologies" value={form.technologies} onChange={updateFormField}>
            <option>-</option>
            <option>MERN</option>
            <option>MEAN</option>
            <option>Tester</option>
            <option>Figma</option>
          </select>
        </div>
        <div className="jobDetails">
          <label>Experience</label>
          <select name="experience" value={form.experience} onChange={updateFormField}>
            <option>-</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div className="jobDetails">
          <label>Location</label>
          <select name="location" value={form.location} onChange={updateFormField}>
            <option>-</option>
            <option>Hyderbad</option>
            <option>Bengluru</option>
            <option>Pune</option>
          </select>
        </div>
        <div className="jobDetails">
          <label>Education</label>
          <select name="graduate" value={form.graduate} onChange={updateFormField}>
            <option>-</option>
            <option>BCA</option>
            <option>BSC</option>
            <option>B.Tech</option>
          </select>
        </div>
        <div className="jobDetails">
          <label>English</label>
          <select name="english" value={form.english} onChange={updateFormField}>
            <option>-</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
        </div>
        <div className="jobDetails">
          <label>Notice</label>
         
          <select name="noticePeriod" value={form.noticePeriod} onChange={updateFormField}>
            <option>-</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
      
      

  
    </>
  );
};

export default Employerjobpost;
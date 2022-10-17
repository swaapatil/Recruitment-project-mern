import React, {  useState,useEffect, useContext } from "react";
// import { useAuthContext } from '../../Hooks/EmployeeAuthContext'
import '../Additionalinfo/Additionalinfo.css'
import axios from "axios";


const Additionalinfo = () => {



    let gettinguser=JSON.parse(localStorage.getItem("user"))
    let userinfo=gettinguser.user._id;
    
   
    
  const [details, setDetails] = useState("");
  // get request
  const getdetails = async () => {
    const response = await axios.get(
      `/api/user/${userinfo}`
    );
    setDetails(response.data);
  };
  useEffect(() => {
    getdetails();
  },[]);


   //update req
   const [basicdetail, setbasicdetail] = useState({
    _id: null,
    role: "",
    currentCompany: "",
    currentLocation: "",
    technology: "",
    experience: "",
    location: "",
    graduate: "",
    english: "",
    notice: ""

  });
  const collectdata = (e) => {
    const { name, value } = e.target;
    setbasicdetail(
      {
        ...basicdetail,
        [name]: value
      },

      // setbasicdetail(e.target.value)
    )
    // getdetails()
    console.log(basicdetail)
    setDetails(e.target.value);

  };

  const updatedetail = async (e) => {
    e.preventDefault();
    // const { _id } = details._id;
    // console.log(details)

    await axios
      .patch(`http://localhost:7000/api/user/login/${userinfo}`,basicdetail)
      .then((res) => {
        console.log(res);
      });
      getdetails()

  };

  //edit change
  const [require, readonl] = useState(true);

  const change = () => {
    if (require == true) {
      readonl(false);
    } else {
      readonl(true);
    }



  


    }

    return (
        <div className="update-user-form" >



            <div>

                <h4>other person details</h4>

                <form className="userinfo" onSubmit={updatedetail}>
                <div>
                    <label htmlFor="">Role :  </label>
                    <input type="text" name='role' onChange={collectdata} value={details.role}   required
                      readOnly={require}  />

                </div>
                <div>
                    <label htmlFor="">Current Company :</label>
                    <input type="text" name='currentCompany' onChange={collectdata} value={details.currentCompany}   required
                      readOnly={require}/>

                </div>
                <div>
                    <label htmlFor="">Current Location :</label>
                    <input type="text" name='currentLocation' onChange={collectdata} value={details.currentLocation}   required
                      readOnly={require} />

                </div>


                    <select name='technology' placeholder="technology" onChange={collectdata} value={details.technology}   required
                      readOnly={require}>
                        <option>python</option>
                        <option>react</option>
                        <option>c++</option>
                    </select>

                    <select name='experience' placeholder="experience" onChange={collectdata} value={details.experience}   required
                      readOnly={require}>
                        <option>one year</option>
                        <option>two year</option>
                        <option>three year</option>
                    </select>

                    <select name='location' placeholder="location" onChange={collectdata} value={details.location}   required
                      readOnly={require}>
                        <option>hyderabad</option>
                        <option>chennai</option>
                        <option>delhi</option>
                    </select>
                    <select name='graduate' placeholder="graduate" onChange={collectdata} value={details.graduate}   required
                      readOnly={require}>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                    </select>
                    <select name='english' placeholder="english" onChange={collectdata} value={details.english}   required
                      readOnly={require}>
                        <option>good</option>
                        <option>medium</option>
                        <option>low</option>
                    </select>
                    <select name='notice' placeholder="notice" onChange={collectdata} value={details.notice}   required
                      readOnly={require}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                  


                    <div className="update-btn">
                        <button type='submit'>SAVE</button>
                        <button onClick={change}>Edit</button>
                    </div>
                </form>
                {/* {error && <div className="extra-form--error">{error}</div>} */}

            </div>


        </div>
    )
};

export default Additionalinfo
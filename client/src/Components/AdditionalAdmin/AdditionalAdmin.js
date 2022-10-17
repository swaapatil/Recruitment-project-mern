import React, { useState, useEffect, useContext } from "react";
import { useAuthContext } from '../../Hooks/EmployeeAuthContext'
import "../AdditionalAdmin/AdditionalAdmin.css"
import axios from "axios";

const AdditionalAdmin = () => {


    let gettinguser = JSON.parse(localStorage.getItem("user"))
    let admininfo = gettinguser.user._id;

    const [details, setDetails] = useState("");
    // get request
    const getdetails = async () => {
        const response = await axios.get(
            `/api/admin/${admininfo}`
        );
        setDetails(response.data);
    };
    useEffect(() => {
        getdetails();
    }, []);


    //update req
    const [basicdetail, setbasicdetail] = useState({
        _id: null,
        address: "",
        noOfEmployees: "",
        headQuarters: "",
        about: ""


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
            .patch(`/api/admin/login/${admininfo}`, basicdetail)
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
        <div>


            <form onSubmit={updatedetail}>
                <div>
                    <label htmlFor="">address :</label>
                    <input type="text" name='address' onChange={collectdata} value={details.address} required
                        readOnly={require} />

                </div>
                <div>
                    <label htmlFor="">NO Of Employees :</label>
                    <input type="number" name=' noOfEmployees' onChange={collectdata} value={details.noOfEmployees} required
                        readOnly={require} />

                </div>
                <div>
                    <label htmlFor="">headQuater:</label>
                    <input type="text" name='headQuarters' onChange={collectdata} value={details.headQuarters} required
                        readOnly={require} />

                </div>
                <div>
                    <label htmlFor="">About:</label>
                    <input type="text" name='about' onChange={collectdata} value={details.about} required
                        readOnly={require} />

                </div>
                <div className="update-btn">
                    <button type='submit'>SAVE</button>
                    <button onClick={change}>Edit</button>
                </div>

            </form>


        </div>
    )
}


export default AdditionalAdmin
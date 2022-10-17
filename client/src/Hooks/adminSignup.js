// import { useState } from "react";
// import { useAuthContext } from "./EmployeeAuthContext";


// export const Signup = () => {
//     const [error, setError] = useState(null)
//     // const [isLoading , setLoading] = useState(null)
//     const { dispatch } = useAuthContext()


//     const signup = async (nameOfTheCompany,  email, contactNumber,  CompanyType, password) => {
//         // setLoading(true)
//         setError(null)

//         const response = await fetch("/api/admin/signup",{
//             method:"POST",
//             headers: {"Content-type":"application/json"},
//             body: JSON.stringify({nameOfTheCompany,  email, contactNumber,  CompanyType, password})
    

//         })
//         const data = await response.json()
//         console.log(data)
//         if(!response.ok){
//             setError(data.error)
//         }
//         if(response.ok){
//             //save user data in local storage
//             localStorage.setItem("user",JSON.stringify(data))

//             // dispatch update user context

//             dispatch({type:"LOGIN", payload:data})


//         }
//     }
//     return {signup,error}

// }



import { useState } from "react";
import { useAuthContext } from "./EmployeeAuthContext";


export const Signup = () => {
    const [error, setError] = useState(null)
    // const [isLoading , setLoading] = useState(null)
    const { dispatch } = useAuthContext()


    const signup = async (nameOfTheCompany,  email, contactNumber,  CompanyType, password) => {
        // setLoading(true)
        setError(null)

        const response = await fetch("/api/admin/signup",{
            method:"POST",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify({nameOfTheCompany,  email, contactNumber,  CompanyType, password})
    

        })
        const data = await response.json()

        if(!response.ok){
            setError(data.error)
        }
        if(response.ok){
            //save user data in local storage
            localStorage.setItem("user",JSON.stringify(data))

            // dispatch update user context

            dispatch({type:"LOGIN", payload:data})


        }
    }
    return {signup,error}

}



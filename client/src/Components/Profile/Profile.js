import React, { useState } from 'react'
import { useAuthContext } from '../../Hooks/EmployeeAuthContext'
import axios from 'axios'

const ProfilePic = () => {

    const { user } = useAuthContext()
    const [profilePic, setProfilePic] = useState('');
    const [error, setError] = useState(null);

    
    const uploadImage = (e) => {
        setProfilePic(e.target.files[0]);
    }

    const headConfig = {
      'Content-type' : 'multipart/form-data'
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      if(!user){
        setError('You need to be logged in to see this page!')
        return
      }

      const formData = new FormData();
      formData.append('photo', profilePic);
      

      axios.post('/api/image/upload', formData, headConfig)
           .then(res => {
              console.log(res);
           })
           .catch(err => {
              console.log(err);
           });
           
  }



  return (
    <div>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={uploadImage}
            />

            <input type="submit"/>
        </form>
    </div>
  )
}

export default ProfilePic
import React, { useContext, useEffect } from 'react';
import UserContext from '../../context/Users/UserContext'; // Corrected import
import './userProfile.css';

const UserProfile = (props) => {
  const { loggeduser, userData } = useContext(UserContext);

  useEffect(() => {
    // Fetch user data when the component mounts
    userData();
  }, []); // Empty dependency array to ensure it runs only once when the component mounts

  // Check if loggeduser is undefined before accessing properties
  if (!loggeduser) {
    // Render a loading state or a message
    return <p>Loading...</p>;
  }
  console.log(loggeduser)

  return (
    <div className="profile">
      <div className="profile-img">
        <img src={loggeduser.user.avatar.url} alt="Avatar" className="avatar" />
      </div>
      <div className="user-details">
        <h3 className="username">{loggeduser.user.name}</h3>
        <p className="user-email">{loggeduser.user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
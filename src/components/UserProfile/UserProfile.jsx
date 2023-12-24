import React, { useContext, useEffect } from "react";
import UserContext from "../../context/Users/UserContext"; // Corrected import
import "./userProfile.css";
import Loader from "../loader/Loader";

const UserProfile = (props) => {
  const { loggeduser, userData } = useContext(UserContext);

  useEffect(() => {
    // Fetch user data when the component mounts
    userData();
  }, []); // Empty dependency array to ensure it runs only once when the component mounts

  // console.log(loggeduser)

  return (
    <>
      {!loggeduser ? (
        <Loader />
      ) : (
        <>
          <div className="profile">
            <div className="profile-img">
              <img
                // src="/Profile.png"
                src={loggeduser.user.avatar.url}
                alt="Avatar"
                className="avatar"
              />
            </div>
            <div className="user-details">
              <h3>Name</h3>
              <h6 className="username">{loggeduser.user.name}</h6>
              <h3>Email</h3>
              <p className="user-email">{loggeduser.user.email}</p>
              <h3>Joined On</h3>
              <p className="joined-date">
                {String(loggeduser.user.createdAt).substr(0, 10)}
              </p>
            </div>
          </div>
          <div className="profile-btn d-flex">
            <button className="btn btn-primary edit">Edit Profile</button>
            <button className="btn btn-primary orders">My Orders</button>
            <button className="btn btn-primary password">
              Change Password
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default UserProfile;

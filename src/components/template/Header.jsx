import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import shoplogo from "../../assets/shop-logo.png";
import "../../css/modal.css";
import "./LoginSignup.css";
import Alert from "../alerts/Alerts";
import Cookies from "js-cookie";
import UserContext, { actionTypes } from "../../context/Users/UserContext";

const Header = () => {
  let location = useLocation();
  const {
    dispatch, // access the dispatch function from context
    isLoggedIn,
    alertOut,
    alertIn,
    login,
    logout,
    signup,
    signbody,
    avatarPreview,
    userData,
  } = useContext(UserContext);

  // for login
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");

  // for signup
  const { name, email, password } = signbody;

  // const loginbody = {
  //   email: email1,
  //   password: password1,
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(e);
  };

  const handleEmailChange = (e) => {
    setEmail1(e.target.value);
    // Update loginbody when email changes
    dispatch({ type: actionTypes.SET_LOGIN_BODY, payload: { email: e.target.value, password: password1 } });
  };

  const handlePasswordChange = (e) => {
    setPassword1(e.target.value);
    // Update loginbody when password changes
    dispatch({ type: actionTypes.SET_LOGIN_BODY, payload: { email: email1, password: e.target.value } });
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
  
      reader.onload = () => {
        if (reader.readyState === 2) {
          dispatch({
            type: actionTypes.REGISTER_DATA_CHANGE,
            payload: {
              avatarPreview: reader.result, // Set the avatarPreview directly
              name: e.target.name,
              value: reader.result, // Set the value to the base64 data URL
            },
          });
        }
      };
  
      reader.readAsDataURL(e.target.files[0]);
    } else {
      dispatch({
        type: actionTypes.REGISTER_DATA_CHANGE,
        payload: { name: e.target.name, value: e.target.value },
      });
    }
  };
  
  return (
    <>
      <div className="head-top" id="top">
        <p className="slogan">Free Shipping For All Products</p>
        <ul className="navbar-nav navitem mb-2 mb-lg-0">
          <li className="nav-item1">
            <Link className="nav-link" to="/">
              Cart
            </Link>
          </li>
          <li className="nav-item1">
            <Link className="nav-link" to="/">
              Wishlist
            </Link>
          </li>
          <li className="nav-item1">
            <Link className="nav-link" to="/">
              Checkout
            </Link>
          </li>
          <li className="nav-item1" id="navbaritem12">
            {!isLoggedIn && !Cookies.get("token") ? (<button
              className="nav-link btn login-btn"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Login
            </button>) : (
                    <>
                      <Link to="/profile" >
                        <FontAwesomeIcon icon={faUser} size="xl" className="user-icon" onClick={userData}/>
                      </Link>
                      <button onClick={logout} className={`nav-link btn logout-btn`} >
                        logout
                      </button>
                    </>
                  )}
          </li>
        </ul>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid container">
          <Link className="navbar-brand" to="/">
            <img src={shoplogo} alt="Asha logo" className="shoplogo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon
              icon={faBarsStaggered}
              className="navbar-toggler-icon"
            ></FontAwesomeIcon>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active fw-bold" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active fw-bold' : ""}`} to="/about">About</Link>
                            </li> */}
              <li className="nav-item dropdown">
                <Link
                  className={`nav-link dropbtn ${
                    location.pathname === "/store" ? "active fw-bold" : ""
                  }`}
                  to="/store"
                >
                  Store
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link
                      className={`dropdown-item ${
                        location.pathname === "/" ? "active fw-bold" : ""
                      }`}
                      to="/"
                    >
                      Men's
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        location.pathname === "/" ? "active fw-bold" : ""
                      }`}
                      to="/"
                    >
                      Women's
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${
                        location.pathname === "/" ? "active fw-bold" : ""
                      }`}
                      to="/"
                    >
                      Unisex
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active ${
                    location.pathname === "/contact" ? "active fw-bold" : ""
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="form-input">
                <input
                  type="text"
                  placeholder="Search product..."
                  name="s"
                  className="ws"
                />
                <button
                  className="button-search searchsubmit productsearchsubmit"
                  type="submit"
                >
                  Search
                </button>
                <input type="hidden" name="post_type" value="product" />
              </div>
            </form>
          </div>
        </div>
      </nav>


      {/* Login modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Login
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
          <div className="contact-form">
            <form onSubmit={handleLogin}>
              <div className="section-field mb-4">
                <input
                  className="require"
                  id="contact_email"
                  type="email"
                  placeholder="Email*"
                  name="email1"
                  onChange={handleEmailChange}
                />
              </div>
              <div className="section-field mb-4">
                <input
                  className="require"
                  id="contact_password"
                  type="password"
                  placeholder="Password*"
                  name="password1"
                  onChange={handlePasswordChange}
                  minLength={5}
                />
              </div>
              <div className="row loginform">
                <div className="col-sm-6">
                  <input
                    type="submit"
                    className="btn btn10 btn-primary"
                    name="submit"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="col-sm-6 pt-2">
                  <a href="#" className="forgottxt">
                    Forgot Password
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
            <div className="modal-footer">
              <p className="text-center">Don't Have an Account?</p>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target=".iq-register"
                className="iq-font-yellow btn15"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Signup modal */}
      <div
        className="modal fade iq-register"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content blue-bg">
            <div className="modal-header text-center">
              <h4 className="modal-title "><b>Sign Up</b></h4>
              <button
                type="button"
                className="btn-close bg-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="contact-form">
                <form encType="multipart/form-data" onSubmit={signup}>
                  <div className="section-field mb-3">
                    <input
                      className="require"
                      id="contact_name"
                      type="text"
                      placeholder="Name*"
                      name="name"
                      value={name}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div className="section-field mb-3">
                    <input
                      className="require"
                      id="contact_email"
                      type="email"
                      placeholder="Email*"
                      name="email"
                      value={email}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div className="section-field mb-3">
                    <input
                      className="require"
                      id="contact_password"
                      type="password"
                      placeholder="Password*"
                      name="password"
                      value={password}
                      onChange={registerDataChange}
                      minLength={5}
                    />
                  </div>
                  <div className="section-field mb-3">
                    <input
                      className="require"
                      id="contact_confirmpassword"
                      type="password"
                      placeholder="Confirm Password*"
                      name="cpassword"
                      onChange={registerDataChange}
                    />
                  </div>
                  <div className="section-field mb-3 registerImage">
                    <img src={avatarPreview} alt="avatar Preview" className="avatarPreview"/> <br />
                  <input type="file" name="avatar" id="avatar" accept="image/*" onChange={registerDataChange} />
                  </div>
                  <input
                    type="submit"
                    className="btn btn10 btn11 btn-primary"
                    name="submit"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </form>
              </div>
            </div>
            <div className="modal-footer text-center">
              <div>
                {" "}
                Already Have an Account?{" "}
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn16"
                >
                  Login
                </button>
              </div>
              {/* <ul className="mediaicon">
                <li>
                  <a href="# ">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <i className="fa-brands fa-facebook "></i>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <i className="fa-brands fa-google "></i>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <i className="fa-brands fa-github "></i>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>

    {/* <Alert type={"success"} msg={"You have been successfully Logged In!"}/> */}
      {alertIn && <Alert type={"success"} msg={"You have been successfully Logged In!"}/>}
      {alertOut && <Alert type={"danger"} msg={"You have been successfully Logged out!"}/>}
    </>
  );
};

export default Header;

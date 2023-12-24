import React, { useEffect, useReducer } from "react";
import UserContext, { actionTypes } from "./UserContext";
import Cookies from "js-cookie";


const initialState = {
  signbody: {
    name: "",
    email: "",
    password: "",
    cpassword: "",
  },
  alertIn: false,
  alertOut: false,
  isLoggedIn: false,
  loginbody: {},
  avatar: "",
  avatarPreview: "/Profile.png",
  loading: false,
};

// Your reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_LOGIN_BODY:
      return { ...state, loginbody: action.payload };
    case actionTypes.LOGIN:
      return { ...state, isLoggedIn: true, alertIn: true };
    case actionTypes.LOGOUT:
      return { ...state, isLoggedIn: false, alertOut: true };
    case actionTypes.LOGGEDIN:
      return {...state, isLoggedIn:false};
    case actionTypes.SIGNUP:
      return { ...state, isLoggedIn: true, alertIn: true };
    case actionTypes.REGISTER_DATA_CHANGE:
        if (action.payload.name === "avatar") {
          return {
            ...state,
            avatarPreview: action.payload.avatarPreview,
            signbody: { ...state.user, [action.payload.name]: action.payload.value },
          };
        } else {
          return {
            ...state,
            signbody: { ...state.user, [action.payload.name]: action.payload.value },
          };
        }
    case actionTypes.USER_DATA:
      return { ...state,isLoggedIn:true, loggeduser : action.payload };
    default:
      return state;
  }
};

const UserState = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  
  const login = async (e) => {
    e.preventDefault();
    console.log(state.loginbody);
    const url = "http://localhost:4000/api/v1/login";
    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state.loginbody),
    });
    const json = await result.json();
    if (json.success === true) {
      dispatch({ type: actionTypes.LOGIN, payload: true });

      Cookies.set("token", json.token, {
        expires: new Date(json.options.expires),
      });
      
      setTimeout(() => {
        dispatch({ type: actionTypes.SET_ALERT_IN, payload: false });
        location = "/";
      }, 2000);
    } else {
      alert(json.message);
    }
  };

  // logout on submit funtion
  const logout = async () => {
    const url = "http://localhost:4000/api/v1/logout";
    const result = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await result.json();
    if (json.success === true) {
      dispatch({ type: actionTypes.LOGOUT, payload: false });

      Cookies.set("token", null, {
        expires: new Date(Date.now()),
      });

      setTimeout(() => {
        dispatch({ type: actionTypes.SET_ALERT_OUT, payload: false });
        location = "/";
      }, 2000);
    } else {
      alert(json.message);
    }
  };

  // for signup function
  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
  
      reader.onload = () => {
        if (reader.readyState === 2) {
          dispatch({ type: actionTypes.REGISTER_DATA_CHANGE, payload: { avatarPreview: reader.result, avatar: reader.result } });
        }
      };
  
      reader.readAsDataURL(e.target.files[0]);
    } else {
      dispatch({ type: actionTypes.REGISTER_DATA_CHANGE, payload: { name: e.target.name, value: e.target.value } });
    }
  };
  
  const signup = async (e) => {
    e.preventDefault();
    const Data = new FormData();
    Data.set("name", state.user.name);
    Data.set("email", state.user.email);
    Data.set("password", state.user.password);
    // Data.set("avatar", state.user.avatar);
    if (state.user.avatar) {
      Data.set("avatar",state.user.avatar);
    } else {
      Data.set("avatar","D:/Jewellery-Shop-main/Jewellery-Shop/public/Profile.png");
    }
    const url = "http://localhost:4000/api/v1/signup";
    const response = await fetch(url, {
      method: "POST",
      body: Data,
    });
    const json = await response.json();
    if (json.success === true) {
      dispatch({ type: actionTypes.SIGNUP, payload: true });

      Cookies.set("token", json.token, {
        expires: new Date(json.options.expires),
      });
      
      setTimeout(() => {
        dispatch({ type: actionTypes.SET_ALERT_IN, payload: false });
        location = "/";
      }, 2000);
    } else {
      alert(json.message);
    }
  };
  
  const userData = async () => {
    const url = "http://localhost:4000/api/v1/profile";
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
    });
    if (response.ok) {
      const json = await response.json();
      dispatch({ type: actionTypes.USER_DATA, payload: json });
    } else {
      console.error("Error fetching user data:", response.status, response.statusText);
    }
  };
  

  useEffect(() => {
    const handleonload = () => {
      userData(); // Run on window reload/refresh
    };
  
    window.addEventListener("load", handleonload);
    
    if (Cookies.get("token")) {
      dispatch({type:actionTypes.LOGGEDIN, payload:true});
    }
    else{
      dispatch({type:actionTypes.LOGGEDIN, payload:false});
    }

    return () => {
      window.removeEventListener("load", handleonload);
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...state,
        dispatch,
        login,
        logout,
        signup,
        registerDataChange,
        userData,
        reducer,
        initialState
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
import { createContext } from "react";

const UserContext = createContext();

export const actionTypes = {
    SET_LOGIN_BODY: "SET_LOGIN_BODY",
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    SIGNUP: "SIGNUP",
    REGISTER_DATA_CHANGE: "REGISTER_DATA_CHANGE",
    USER_DATA: "USER_DATA",
  };

export default UserContext;
import { configureStore } from "@reduxjs/toolkit";

import isLoggedReducer from "./isLogged";
import loginErrorReducer from "./loginError";
import profileDataReducer from "./profileData";


const store = configureStore ({
  reducer: {
    isLogged: isLoggedReducer,
    profileData: profileDataReducer,
    loginError: loginErrorReducer,
  },
});

export default store;

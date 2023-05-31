import getProfile from "./GetProfile";
import store from "../features/store";
import { loginErrorAction } from "../features/loginError";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * @description get tokens
 * @param {string} email
 * @param {string} password
 * @returns {token} // get token in localStorage
 */
export default async function getToken (email, password) 
{
  const requestOptions = 
  {
    method: "POST",
    headers: { 
        "Content-Type": "application/json" },
    body: JSON.stringify({ 
        email: email, 
        password: password,
    }),
  };

  return fetch("http://localhost:3001/api/v1/user/login", requestOptions)
    .then((res) => res.json())
    .then((response) => 
    {
      const { token } = response.body;
      toast.success("Welcome to your account ...");
      localStorage.setItem("token", token);
      getProfile();
      store.dispatch(loginErrorAction(false));
    })
    .catch(() => 
    {
      console.log("Error in API Token");
      toast.error("You've made a mistake in your credentials", 
      {
        position: toast.POSITION.TOP_CENTER,
        className: "toast-message-error",
      });
      store.dispatch(loginErrorAction(true));
    })
}
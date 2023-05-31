import { profileActionData } from "../features/profileData";
import { isLoggedAction } from "../features/isLogged";
import store from "../features/store";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

/**
 * @description Get user's information (first and last name)
 * @returns {firstName, lastName} elements
 */
export default async function getProfile () 
{
  const requestOptions = 
  {
    method: "POST",
    headers: 
    {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  };

  return fetch("http://localhost:3001/api/v1/user/profile", requestOptions)
    .then((res) => res.json())
    .then((response) => 
    {
      console.log(response)
      const { firstName, lastName } = response.body;
      toast.success("Welcome to your account ...");
      store.dispatch(
        profileActionData({
          firstName: firstName,
          lastName: lastName
        }),
      )
      store.dispatch(isLoggedAction());
    })
    .catch(() => 
    {
      console.log("Error in getProfile");
      toast.error("There was a issue with fetching your profile data.", 
      {
        position: toast.POSITION.TOP_CENTER,
        className: "toast-message-error",
      });
    })
}
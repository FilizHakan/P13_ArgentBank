import { profileActionData } from "../features/profileData";
import { isLoggedAction } from "../features/isLogged";
import store from "../features/store";

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
    })
}
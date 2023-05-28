import { profileActionData } from "../features/profileData";
import store from "../features/store";

/**
 * @description Get Tokens
 * @param {string} firstName
 * @param {string} lastName
 * @returns {firstName, lastName} // Update first and last name in the form input section
 */
export default async function updateProfile (updateFirstName, updateLastName) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${localStorage.getItem("token")}` },
    body: JSON.stringify({ firstName: updateFirstName, lastName: updateLastName })
  }
  return fetch("http://localhost:3001/api/v1/user/profile", requestOptions)
    .then((res) => res.json())
    .then((response) => {
      console.log(response)
      const { firstName, lastName } = response.body
      store.dispatch(
        profileActionData({
          firstName: firstName,
          lastName: lastName
        })
      )
    })
    .catch(() => {
      console.log("Error in PutProfile")
    })
}
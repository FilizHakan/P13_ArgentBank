import React, { useState } from "react";
import { useSelector } from 'react-redux'
import updateProfile from "../../services/UpdateProfile";
import { profileDataSelector } from "../../features/selector";

/**
 * @description Profile update component
 * @returns {JSX} element
 */
export default function ProfileUpdate ()
{
    // Get firstname and lastname from the selector
    const userData = useSelector(profileDataSelector);

    // Local state for opening or closing the form
    const [formUpdate, setFormUpdate] = useState(false);

    function ShowForm ()
    {
        setFormUpdate(true);
    }

    function HideForm ()
    {
        setFormUpdate(false);
    }

    // Constant for the local state of the new firstname and lastname from form input
    const [updateName, setUpdateName] = useState({ 
        firstName: "", 
        lastName: ""
    });
    
    // Get the new firstname and lastname from the form input  
    const onChange = (el) =>
    {
        el.persist();
        const { name, value } = el.target;
        setUpdateName((state) =>
        ({
            ...state, [name]: value,
        }));
    };

    // Sending the form with the new first and last name to the API
    const onSubmit = (el) =>
    {
        el.preventDefault();
        updateProfile(
            updateName.firstName, 
            updateName.lastName
        );
    };

    return (
        <div className="profileUpdate">
            <button className="edit-button" type="button" onClick={ShowForm}>
                Edit Name
            </button>
            {formUpdate === true ? (
            <div className="formContainer">
                
                <form className="changeNameForm" onSubmit={onSubmit}>
                    
                    <div className="NamesContainer">
                        <div className="firstName">
                            <label htmlFor="firstName">
                                <input 
                                    type="text" 
                                    autoComplete="off"
                                    className="input-firstName" 
                                    name="firstName" 
                                    placeholder={userData.data.firstName} 
                                    value={updateName.firstName} 
                                    onChange={onChange} 
                                />
                            </label>
                        </div>
                    

                        <div className="lastName">
                            <label htmlFor="lastName">
                                <input 
                                    type="text" 
                                    autoComplete="off"
                                    className="input-lastName" 
                                    name="lastName" 
                                    placeholder={userData.data.lastName} 
                                    value={updateName.lastName} 
                                    onChange={onChange} 
                                />
                            </label>
                        </div>

                    </div>

                    <div className="button-updateProfile">
                        <button 
                            type="submit"
                            className="btn-save"
                        >
                            Save
                        </button>
                        <button 
                            className="btn-cancel"
                            onClick={HideForm} 
                            type="button"
                        >
                            Cancel
                        </button>
                    </div>

                </form>
            </div>
            ) : (
            ' '
            )};
        </div>
    );
};
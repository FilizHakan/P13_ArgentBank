import React from "react";
import { useSelector } from "react-redux";

export function ShowError() 
{
  const errorLogin = useSelector((state) => state.loginError)
  return <p className="login-Error">{errorLogin.data === true ? 'Mot de passe ou Email Incorrect!' : ''}</p>
};

export const isLoggedSelector = (state) => state.isLogged;

export const loginErrorSelector = (state) => state.loginError;

export const profileDataSelector = (state) => state.profileData;

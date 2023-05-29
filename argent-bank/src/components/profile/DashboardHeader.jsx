import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { isLoggedAction } from "../../features/isLogged";
import BankLogo from "../../assets/argentBankLogo.png";
import store from "../../features/store";
import { profileDataSelector, isLoggedSelector } from "../../features/selector";

/**
 * @description Dashboard Header component
 * @returns {JSX} element
 */
export default function DashboardHeader ()
{
    // Fetch user's first and last name
    const userData = useSelector(profileDataSelector);

    // User log in or log out ?
    const isLogged = useSelector(isLoggedSelector);

    return (
        <div>
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img
                        src={BankLogo}
                        className="main-nav-logo-image"
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {userData.data && isLogged ? (
                    <div className="out">
                        <Link className="main-nav-item nav-name" to="/dashboard">
                            <i className="fa fa-user-circle"></i>
                            <span style={{ fontWeight: "700", color: "#751a8b" }}>
                                {userData.data.firstName}
                            </span>
                        </Link>

                        <button
                            type="submit"
                            className="main-nav-item"
                            value={"exitDashboard"}
                            onClick={() => store.dispatch(isLoggedAction())}
                        >
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </button>
                    </div>
                    ) : (
                    <div>
                        <Link to="/sign-in" className="main-nav-item">
                            <i className="fa fa-user-circle" />
                            Sign In
                        </Link>
                    </div>
                )}
            </nav>
        </div>
    )
}




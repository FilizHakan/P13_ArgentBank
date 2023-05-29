import React from "react";
import { useSelector } from "react-redux";

import ProfileUpdate from "./ProfileUpdate";
import { profileDataSelector } from "../../features/selector";

/**
 * @description Dashboard Body Component
 * @returns {JSX} element
 */
export default function DashboardBody () 
{

const user = useSelector(profileDataSelector);

    return (
      <div>
        <main className="bg-dark-user">
          <div className="header">
            <h1 className="welcome-name">
              Welcome back
              <br />
              <span>
              {user.data.firstName}
              {" "}
              {user.data.lastName}!
              </span>
            </h1>
          </div>

          <ProfileUpdate />

          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Savings (x6712)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </main>
      </div>
    );
};
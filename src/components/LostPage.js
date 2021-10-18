import React from "react";
import "./LostPage.css";
import errorSign from "../assets/error.png";

export default function LostPage() {
  return (
    <div className="not-found-container">
      <div className="not-found-messages">
        <h1>404. Incorrect URL.</h1>
        <h3>The requested URL was not found.</h3>
        <h3>Try another one.</h3>
      </div>

      <img src={errorSign} alt="error sign" className="not-found-sign" />
    </div>
  );
}

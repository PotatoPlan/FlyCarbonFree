import React from "react";
import { NavLink } from "react-router-dom";
import teamLogo from "../assets/teamlogo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <img src={teamLogo} alt="Team Logo" />
        <h1>Copyright © 2021 by Fantastic Quadra</h1>
      </div>

      <div className="footer-item">
        <h2>ABOUT</h2>
        <NavLink to="/AboutUs">
          <button>About Us</button>
        </NavLink>
      </div>

      <div className="footer-item">
        <h2>DISCLAIMER</h2>
        <NavLink to="/Disclaimer">
          <button>Disclaimer</button>
        </NavLink>
      </div>

      <div className="footer-item">
        <h2>FEATURES</h2>
        <NavLink to="/LearnCarbonEmissions">
          <button>Learn More</button>
        </NavLink>

        <NavLink to="/Calculator">
          <button>Calculator</button>
        </NavLink>

        <NavLink to="/Balancer">
          <button>Balancer</button>
        </NavLink>

        <NavLink to="/Comparison">
          <button>Comparison</button>
        </NavLink>
      </div>
    </div>
  );
}

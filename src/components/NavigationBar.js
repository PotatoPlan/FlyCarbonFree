import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import logo from "../assets/projectlogo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { Dropdown } from "semantic-ui-react";

export default function NavigationBar() {
  const [toggle, setToggle] = useState(false);

  const toggleTrueFalse = () => setToggle(!toggle);

  return (
    // Navigation bar and the project logo
    <header>
      <div className="navigation-container">
        <nav>
          <NavLink to="/" exact>
            <img src={logo} alt="Team logo" className="main-logo" />
          </NavLink>
        </nav>

        <div className="route-container">
          <nav>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </nav>

          <nav>
            <Dropdown text="Learn more about..." className="nav-dropdown">
              <Dropdown.Menu
                style={{
                  backgroundColor: "rgb(255, 255, 255, 0.95)",
                  marginTop: "11px",
                }}
              >
                <NavLink to="/LearnCarbonEmissions">
                  <Dropdown.Item
                    text="Impact of CO2 emissions"
                    className="nav-dropdown-text"
                  />
                </NavLink>

                <NavLink to="/LearnCarbonFootprint">
                  <Dropdown.Item
                    text="What is carbon footprint"
                    className="nav-dropdown-text"
                  />
                </NavLink>

                <NavLink to="/LearnReduce">
                  <Dropdown.Item
                    text="How to reduce your carbon footprint"
                    className="nav-dropdown-text"
                  />
                </NavLink>
              </Dropdown.Menu>
            </Dropdown>
          </nav>

          <nav>
            <NavLink to="/Calculator">Calculator</NavLink>
          </nav>

          <nav>
            <NavLink to="/Balancer">Balancer</NavLink>
          </nav>

          <nav>
            <NavLink to="/Comparison">Comparison</NavLink>
          </nav>
        </div>

        <AiOutlineMenu className="hamburger-menu" onClick={toggleTrueFalse} />
      </div>

      {/* Display this nav container once users hit the hamburger menu button */}
      {toggle === true && (
        <div className="small-nav-container">
          <nav>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </nav>

          <nav>
            <Dropdown text="Learn more about..." className="nav-dropdown">
              <Dropdown.Menu
                style={{
                  backgroundColor: "rgb(255, 255, 255, 0.95)",
                  marginTop: "11px",
                }}
              >
                <NavLink to="/LearnCarbonEmissions">
                  <Dropdown.Item
                    text="Impact of CO2 emissions"
                    className="nav-dropdown-text"
                  />
                </NavLink>

                <NavLink to="/LearnCarbonFootprint">
                  <Dropdown.Item
                    text="What is carbon footprint"
                    className="nav-dropdown-text"
                  />
                </NavLink>

                <NavLink to="/LearnReduce">
                  <Dropdown.Item
                    text="How to reduce your carbon footprint"
                    className="nav-dropdown-text"
                  />
                </NavLink>
              </Dropdown.Menu>
            </Dropdown>
          </nav>

          <nav>
            <NavLink to="/Calculator">Calculator</NavLink>
          </nav>

          <nav>
            <NavLink to="/Balancer">Balancer</NavLink>
          </nav>

          <nav>
            <NavLink to="/Comparison">Comparison</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}

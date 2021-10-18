import React, { useEffect } from "react";
import "./AboutUs.css";
import teamLogo from "../assets/teamlogo.png";
import visionImage from "../assets/aboutvision.jpeg";
import missionImage from "../assets/aboutmission.jpeg";

export default function AboutUs() {
  useEffect(() => {
    document.title = "Fly Carbon Free - About Us";
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-container">
      <div className="about-heading">
        <img src={teamLogo} alt="Team Logo" />

        <div className="heading-description">
          <h2>Fantastic Quadra</h2>
          <p>Know more about our us</p>
        </div>
      </div>

      <div className="about-team-about">
        <div className="about-team-vision">
          <div className="about-text-container">
            <h3>Our Vision</h3>
            <p>
              To become an environmental organisation, inspiring individuals,
              communities, and businesses to take practical, effective, and
              long-term environmental action particularly in the area of public
              transportation, minimise the effects of climate change, and
              restore degraded ecosystems.
            </p>
          </div>
          <div className="about-image-container">
            <img className="about-images" src={visionImage} alt="Our Vision" />
          </div>
        </div>

        <div className="about-team-mission">
          <div className="about-text-container">
            <h3>Our Mission</h3>
            <p>
              Planting biodiverse native forests in Australia to sequester
              carbon in all its practicable and economically viable forms. These
              carbon sequestration operations attempt to lessen the negative
              effects on our ecosystem and to ensure a long-term environmental
              future, including providing habitat for local wildlife. To do it
              in a way that makes our supporters and clients feel connected to
              the environment and gives them the power to help conserve and
              restore it for future generations.
            </p>
          </div>
          <div className="about-image-container">
            <img
              className="about-images"
              src={missionImage}
              alt="Our Mission"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

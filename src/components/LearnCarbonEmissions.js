import React, { useEffect } from "react";
import "./LearnCarbonEmissions.css";
import emissions from "../assets/emissions.jpeg";
import { NavLink } from "react-router-dom";

export default function LearnCarbonEmissions() {
  useEffect(() => {
    document.title = "Fly Carbon Free - Learn More";
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="learn-carbon-emissions-container">
      <div className="learn-carbon-emissions-content">
        <h1>Impact of CO2 emissions on our environment</h1>
        <div className="learn-carbon-emissions-text">
          <div className="learn-carbon-emissions-image-container">
            <img
              className="learn-carbon-emissions-image"
              src={emissions}
              alt="Melting iceberg"
            />
          </div>
          <div className="learn-carbon-emissions-paragraph">
            <div>
              <h3>Global warming and climate change</h3>
              <p>
                Climate change is one of the most pressing issues we face today.
                Global warming has accelerated in recent decades, according to
                the IPCC's Fourth Assessment Report (2007), and there is new and
                stronger evidence that warming during the past 50 years is due
                to increased glasshouse gas emissions connected with human
                activities. To stabilise our climate and avoid significant
                negative repercussions on the economy and climate, scientists
                agree that we need to reduce emissions by 80% by 2050 (compared
                to 1990 levels). We have the potential to combat climate change
                as a responsible society.
              </p>
            </div>

            <div>
              <h3>Be part of the solution</h3>
              <p>
                Carbon offsetting does not, by itself, provide a solution to
                global warming, but it does play an important role in the
                overall strategy to carbon management. Even if you dramatically
                cut your emissions, you are unlikely to be able to eliminate all
                sources of glasshouse gases from your life. A carbon offset
                program is a quick and affordable method to take responsibility
                for your own environmental impact and contribute to the fight
                against climate change.
              </p>
            </div>

            <div>
              <h3>Impact of aviation on CO2 emission</h3>
              <p>
                Did you know that for every litre of unleaded petrol your car
                releases around <strong>1.7 kg</strong> of greenhouse gas? While
                one litre of diesel releases around <strong>2.9kg</strong>?
                Whether you drive or not, there are ways to reduce your
                emissions while travelling. Air travel is emissions intensive.
                When holidaying, think about staying locally, minimising
                multiple flights, and using accredited eco-tourism operators.
              </p>
            </div>

            <div>
              <h3>What is next?</h3>
              <p>
                To tackle this problem we as individuals need to take urgent
                steps to reduce our own carbon footprint.
              </p>
              <NavLink
                style={{
                  color: "#000000",
                  fontWeight: "700",
                  textDecoration: "underline",
                }}
                to="/LearnCarbonFootprint"
              >
                <p
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.05)",
                    paddingLeft: "5px",
                    textAlign: "center",
                  }}
                >
                  Here is all what you need to know about carbon footprint
                </p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

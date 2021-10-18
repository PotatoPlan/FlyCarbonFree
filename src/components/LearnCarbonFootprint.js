import React, { useEffect } from "react";
import "./LearnCarbonFootprint.css";
import { NavLink } from "react-router-dom";
import butterflychart from "../assets/butterflychart.png";

export default function LearnCarbonFootprint() {
  useEffect(() => {
    document.title = "Fly Carbon Free - Learn More";
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="learn-carbon-footprint-container">
      <div className="learn-carbon-footprint-content">
        <h1>What is Carbon Footprint</h1>
        <div className="learn-carbon-footprint-text">
          <div className="learn-carbon-footprint-paragraph">
            <p>
              The entire glasshouse gas emissions created by an individual,
              event, organisation, service, place, or product, represented as
              carbon dioxide equivalent, is referred to as a carbon footprint.
              The burning of fossil fuels, land clearance, and the production
              and consumption of food, manufactured goods, materials, wood,
              roads, buildings, transportation, and other services can all
              generate glasshouse gases, including the carbon-containing gases
              carbon dioxide and methane. A $250 million advertising campaign by
              the oil and gas corporation BP popularised the term in an attempt
              to shift public focus away from limiting the operations of fossil
              fuel companies and towards individual responsibility for
              addressing climate change.
            </p>

            <img
              className="butterflychart"
              src={butterflychart}
              alt="Butterfly chart"
            />

            <p>
              As a result, other nations that have seen an increase in CO2
              emissions should follow the tactics used by successful countries
              in order to lower their own CO2 emissions.
            </p>

            <br />
            <br />
            <p>
              Because of a lack of understanding and data regarding the
              intricate interconnections between contributing processes,
              including the influence of natural processes that store or release
              carbon dioxide, the overall carbon footprint cannot be determined
              precisely in most circumstances. As a result, Wright, Kemp, and
              Williams proposed the following carbon footprint definition:
            </p>

            <br />
            <br />
            <strong>
              <p>
                A measure of the total amount of carbon dioxide (CO2) and
                methane (CH4) emissions of a defined population, system or
                activity, considering all relevant sources, sinks and storage
                within the spatial and temporal boundary of the population,
                system or activity of interest. Calculated as carbon dioxide
                equivalent using the relevant 100-year global warming potential.
              </p>{" "}
            </strong>
          </div>

          <div className="explain-video">
            <p style={{ paddingBottom: "5px" }}>
              Checkout an explanatory YouTube video from simpleshow
            </p>
            <iframe
              className="actual-video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8q7_aV8eLUE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <a
              href="https://www.youtube.com/watch?v=8q7_aV8eLUE"
              target="_blank"
              rel="noreferrer"
            >
              <button className="video-button">Go to the video</button>
            </a>
          </div>

          <div style={{ marginTop: "50px" }}>
            <p>
              After complete understanding of what carbon footprint is, here are
              some of the major steps that you can take to reduce it.
            </p>
            <NavLink
              style={{
                color: "#000000",
                fontWeight: "700",
                textDecoration: "underline",
              }}
              to="/LearnReduce"
            >
              <p
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.05)",
                  marginTop: "10px",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                Know more about the ways to minimise your own carbon footprint
              </p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

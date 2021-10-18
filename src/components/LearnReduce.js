import React, { useEffect } from "react";
import "./LearnReduce.css";
import { NavLink } from "react-router-dom";
import doughnutchart from "../assets/doughnutchart.png";
import barchart from "../assets/barchart.png";

export default function LearnReduce() {
  useEffect(() => {
    document.title = "Fly Carbon Free - Learn More";
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="learn-reduce-container">
      <div className="learn-reduce-content">
        <h1>How to Reduce Your Carbon Footprint</h1>
        <div className="learn-reduce-text">
          <div className="learn-reduce-paragraph">
            <h3 style={{ textAlign: "left" }}>
              Carbon footprint and transportation
            </h3>
            <img
              src={doughnutchart}
              alt="Carbon Footprint of Global Tourism"
              className="visualisation-images"
            />
            <p style={{ fontWeight: "bold", fontSize: "0.8em" }}>
              Figure 1: different factor's percentage contribution involved with
              carbon footprint of global tourism
            </p>
            <p style={{ marginTop: "10px" }}>
              Transport has the maximum contribution to the carbon footprint
              which is nearly half of the total carbon footprint produced. All
              the other factors combined contribute way less than Transport. And
              thus, if we are able to find ways to control the footprint caused
              by transport then it would be of great impact.
            </p>
            <img
              style={{ marginTop: "20px" }}
              src={barchart}
              alt="Emissions from different modes of transport"
              className="visualisation-images"
            />
            <p style={{ fontWeight: "bold", fontSize: "0.8em" }}>
              Figure 2: the amount of CO2 and other non-CO2 emissions using
              different modes of transport for 1 km travel
            </p>
            <p style={{ marginTop: "10px" }}>
              From the figure 2, it becomes clear that way more carbon dioxide
              is emitted in the environment via airplane than any other mode of
              transport, closely followed by cars and buses. Thus, as we dived
              deep, we figure that travelling by air is one of the major reasons
              for increased CO2 emissions which leads to problems like global
              warming, etc.
            </p>

            <br />
            <br />
            <h3>What can we do?</h3>
            <p>
              First, you’ll want to calculate your own footprint via this handy
              calculator.
            </p>
            <NavLink to="/Calculator">
              <button className="learn-reduce-button">Calculator</button>
            </NavLink>

            <br />
            <br />
            <p>
              Now that you’ve got your size, let’s see what we can do to get you
              into something smaller.
            </p>

            <br />
            <br />
            <h3>Fly less</h3>
            <p>
              Most people enjoy being taken out into the air in a giant metal
              tube vehicle and then dumped in a sunny location. It's
              entertaining. But, is it always necessary?
            </p>

            <br />
            <br />
            <p>
              When it comes to carbon emissions, flights are a powerhouse. For a
              flight from NYC to LA, you're looking at more than 1 metric ton of
              CO2 emissions.
            </p>

            <br />
            <br />
            <p>
              The most basic piece of advice is to fly less. But, as we all
              know, saying it is simpler than doing it. So, if you really must
              go, fly economy class (lower plane footprint) and nonstop.
              Takeoffs and landings consume a significant amount of fuel.
            </p>

            <br />
            <br />
            <p>
              Finally, if you're feeling bad about those trips, find a way to
              make up for it! Carbon offsets for a variety of environmental
              projects are available through a number of services. To know more
              about the various offset programs by the airline companies please
              check the{" "}
              <NavLink
                style={{ color: "#000000", textDecoration: "underline" }}
                to="/Comparison"
              >
                COMPARISON
              </NavLink>{" "}
              on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

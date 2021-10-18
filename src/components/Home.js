import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import heroFeatureOne from "../assets/herofeatureone.jpeg";
import heroFeatureTwo from "../assets/herofeaturetwo.jpeg";
import heroFeatureThree from "../assets/herofeaturethree.jpeg";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "./Home.css";
import newsImageOne from "../assets/news1.png";
import newsImageTwo from "../assets/news2.png";
import newsImageThree from "../assets/news3.png";

export default function Home() {
  useEffect(() => {
    document.title = "Fly Carbon Free - Home";
  });

  return (
    <div>
      <section>
        <div className="hero-feature-container">
          <div className="problem-statement">
            <h1 style={{ marginBottom: "20px" }}>
              CO2 emissions have been a key environmental problem to earth, and
              the aviation industry has played a big role in worsening the
              issue.
            </h1>
            <h1 style={{ marginBottom: "20px" }}>
              What can we do to raise awareness regarding this global challenge?
            </h1>
            <NavLink to="/LearnCarbonEmissions">
              <button>Learn More</button>
            </NavLink>
          </div>

          <div className="hero-features">
            <div className="the-feature">
              <div className="the-feature-thumbnail">
                <img src={heroFeatureOne} alt="Calculator" />
              </div>

              <div className="the-feature-text">
                <h3>Calculate Carbon Footprint</h3>
                <p>
                  Understand my carbon footprint from previous flights, and its
                  impact to our beloved environment.
                </p>
              </div>

              <div className="the-feature-button">
                <NavLink to="/Calculator">
                  <button>Calculate</button>
                </NavLink>
              </div>
            </div>

            <div className="the-feature">
              <div className="the-feature-thumbnail">
                <img src={heroFeatureTwo} alt="Balancer" />
              </div>

              <div className="the-feature-text">
                <h3>Balance Out Carbon Footprint</h3>
                <p>
                  Offset my carbon footprint from flights, and make contribution
                  to tackle this environmental issue.
                </p>
              </div>

              <div className="the-feature-button">
                <NavLink to="/Balancer">
                  <button>Balance Out</button>
                </NavLink>
              </div>
            </div>

            <div className="the-feature">
              <div className="the-feature-thumbnail">
                <img src={heroFeatureThree} alt="Comparison" />
              </div>

              <div className="the-feature-text">
                <h3>Compare Offset Programs</h3>
                <p>
                  Browse over different carbon footprint offset programs, and
                  plan your travel wisely.
                </p>
              </div>

              <div className="the-feature-button">
                <NavLink to="/Comparison">
                  <button>Compare</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-features-compact">
          <div style={{ borderTop: "none" }} className="compact-hero">
            <h3>Calculate Carbon Footprint</h3>
            <NavLink to="/Calculator">
              <button>Calculate</button>
            </NavLink>
          </div>

          <div className="compact-hero">
            <h3>Balance Out Carbon Footprint</h3>
            <NavLink to="/Balancer">
              <button>Balance Out</button>
            </NavLink>
          </div>

          <div className="compact-hero">
            <h3>Compare Offset Programs</h3>
            <NavLink to="/Comparison">
              <button>Compare</button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Slideshow */}
      <section style={{ marginBottom: "250px" }}>
        <h2
          style={{
            paddingBottom: "10px",
            paddingLeft: "10px",
            color: "#ffffff",
            fontSize: "40px",
            fontWeight: "300",
          }}
        >
          Relevant Articles
        </h2>
        <div className="slideshow">
          <Slide duration="10000">
            {/* News One */}
            <a
              href="https://www.abc.net.au/news/science/2018-04-11/carbon-offsets-worth-buying-air-travel-tourism-emissions/9638466"
              target="_blank"
              rel="noreferrer"
            >
              <div className="each-fade">
                <div className="slideshow-image">
                  <img src={newsImageOne} alt="News" />
                </div>
                <div className="slideshow-text">
                  <h3>
                    Is it worth paying for carbon offsets next time you fly?
                  </h3>
                  <p>ABC News, Wednesday 11 April 2018</p>
                </div>
              </div>
            </a>

            {/* News Two */}
            <a
              href="https://www.futurelearn.com/info/blog/how-to-reduce-your-carbon-footprint-tips"
              target="_blank"
              rel="noreferrer"
            >
              <div className="each-fade">
                <div className="slideshow-text">
                  <h3>How to reduce your carbon footprint - 20 top tips</h3>
                  <p>FutureLearn, Thursday 12 January 2021</p>
                </div>
                <div className="slideshow-image">
                  <img src={newsImageTwo} alt="News" />
                </div>
              </div>
            </a>

            {/* News Three */}
            <a
              href="https://climateactionmoreland.org/our-campaigns/campaign-for-sustainable-transport/melbourne-airport-and-aviation-emissions/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="each-fade">
                <div className="slideshow-image">
                  <img src={newsImageThree} alt="News" />
                </div>
                <div className="slideshow-text">
                  <h3>Melbourne Airport and aviation emissions</h3>
                  <p>Climate Action Moreland, Wednesday 11 April 2018</p>
                </div>
              </div>
            </a>
          </Slide>
        </div>
      </section>
    </div>
  );
}

import React, { useEffect } from "react";
import "./Disclaimer.css";

export default function Disclaimer() {
  useEffect(() => {
    document.title = "Fly Carbon Free - Disclaimer";
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="disclaimer-container">
      <h1>Disclaimer</h1>

      <div className="disclaimer-text">
        <div className="disclaimer-box">
          <h3>Logos</h3>
          <p>
            All trademarks, designs, names and logos displayed on this site are
            of their respective holders, except the team logo of Fantastic
            Quadra and the project logo of Fly Carbon Free. Use of them does not
            imply any affiliation with or endorsement by them. All
            specifications are subject to change without notice.
          </p>
        </div>

        <div className="disclaimer-box">
          <h3>Icons</h3>
          <p>Icons from Home page are made by Freepik from www.flaticon.com</p>
        </div>

        <div className="disclaimer-box">
          <h3>Calculator</h3>
          <p>
            The carbon footprint calculator functionality only provides a
            reference to the calculated result, and the result is provided with
            no guarantees of accuracy and usefulness.
          </p>
        </div>

        <div className="disclaimer-box">
          <h3>Offset Program Comparison</h3>
          <p>
            Offset Programs information is subject to their respective
            providers. Use of them does not imply any affiliation with or
            endorsement by them.
          </p>
        </div>

        <div className="disclaimer-box">
          <h3>Graphs and images</h3>
          <p>
            Most images of this site are free-to-use images from Pexels
            (http://www.pexels.com). Data visualisations are from various
            sources including Sustainable Travel International, BBC News, and
            the American Enterprise Institute (AEI).
          </p>
        </div>

        <div className="disclaimer-box">
          <h3>Dataset</h3>
          <p>
            Please refer to our Mahara pages
            (https://bit.ly/Fantastic4IndustryMentorPage) for data references
            and the Data Management Plan.
          </p>
        </div>
      </div>
    </div>
  );
}

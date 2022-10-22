import React, { useEffect } from "react";
import bay from "./../../images/bay.png";
import Title from "../reusable/Title";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Details.css";

const Details = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="test">
      <Title title="what i do?" />
      <div className="section2">
        <div data-aos="zoom-in-up" className="details">
          <h2 className="details-h2">
            <span>Front-end</span>
            <span> web development</span>
          </h2>
          <p>Skills:</p>
          <ul>
            <li>HTML5, CSS3, Bootstrap, React.js, Github</li>
          </ul>
          <p>Figma to Html5</p>
          <p>PSD to HTML5</p>
          <p>JavaScript animations</p>
          <p>React js</p>
          <p>Responsive design(mobile, tablet, desktop)</p>
        </div>
        <div>
          <img
            data-aos="zoom-in-up"
            className="bay"
            src={bay}
            alt="baymax at what i do"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;

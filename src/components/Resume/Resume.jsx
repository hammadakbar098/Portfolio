import React, { useEffect } from "react";
import Title from "./../reusable/Title";
import ProgressBar from "../reusable/ProgressBar";
import Svg from "./../../images/image.svg";
import reactz from "./../../images/react.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Resume.css";
import {
  images,
  information,
  experience,
  ProgressBarDetails,
} from "./ResumeDetails.js";

const Resume = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div className="title">
        <Title title="Resume" />
      </div>
      <div className="details_section">
        {/* Section 1 */}
        <div className="rSection_1">
          <img
            data-aos="fade-right"
            className="arrows"
            src={Svg}
            alt="My Resume Arrows"
          />
          {/* Education Details Box */}
          <div data-aos="fade-left" className="box_placement">
            {information.map((info) => {
              return (
                <div className="my_details">
                  <p>
                    <span className="details_bold">{info.level}</span>
                    <span className="details_normal"> ({info.year})</span>
                  </p>
                  <p className="details_normal details_medium">
                    {info.institue}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Section 2 */}
        <div className="rSection_2">
          {/* Experience section */}
          <div data-aos="fade-right" className="experience">
            {experience.map((exp) => {
              return (
                <span className={exp.classname}>
                  <p className="expBold">{exp.year}</p>
                  <p className="expNormal">{exp.title}</p>
                </span>
              );
            })}
          </div>
          {/* Icons */}
          <div data-aos="fade-right" className="icons">
            {images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image.name}
                  alt={image.tag}
                  className={image.name === reactz ? "react" : " "}
                />
              );
            })}
          </div>
          {/* Progress Bar */}

          <div data-aos="fade-right" className="barDisplay">
            {ProgressBarDetails.map((bar) => {
              return (
                <div className="barDiv">
                  <ProgressBar title={bar.title} width={bar.width} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;

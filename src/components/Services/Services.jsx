import React, { useEffect } from "react";
import "./Services.css";
import nf from "./../../images/nf.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="services-s">
        <h1>Sorry For Inconvenience </h1>
        <img data-aos="zoom-in" src={nf} alt="underconstruction" />
        <h1>This Page Is Currently Under Construction!</h1>
      </div>
    </>
  );
};

export default Services;

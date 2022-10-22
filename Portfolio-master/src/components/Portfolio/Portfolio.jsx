import React, { useEffect } from "react";
import nf from "./../../images/nf.png";
import "./Portfolio.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="portfolio-s">
        <h1>Sorry For Inconvenience </h1>
        <img data-aos="zoom-in" src={nf} alt="UnderConstruction" />
        <h1> This Page Is Currently Under Construction!</h1>
      </div>
    </>
  );
};

export default Portfolio;

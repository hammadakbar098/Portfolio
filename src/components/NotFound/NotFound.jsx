import React, { useEffect } from "react";
import nf from "./../../images/nf.png";
import "./NotFound.css";
import Aos from "aos";
import "aos/dist/aos.css";
const NotFound = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="error-s">
      <img data-aos="zoom-in" src={nf} alt="UnderConstruction" />
      <h1>Error 404 Page Not-Found!</h1>
    </div>
  );
};

export default NotFound;

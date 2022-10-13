import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import baymax from "./../../images/baymaxhome.png";
// import Lines from "../reusable/Lines";
import HammadCv from "./../../images/Hammadcv.pdf";
import Button from "./../reusable/button";
import Aos from "aos";
import "aos/dist/aos.css";

import "./Header.css";
const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [showElement, setShowElement] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 2500);
  }, []);

  const text = " web care companion";
  return (
    <div id="home">
      <div className="header">
        <div className="left-text size text-header">
          <h4 data-aos="fade-down">
            Hi! I am Hammad. <br />
            Your
            {showElement ? (
              text
            ) : (
              <span className="typing">
                <Typewriter
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={70}
                  delaySpeed={1000}
                  words={[
                    " web developer",
                    " UI/UX designer",
                    " web care companion",
                  ]}
                />
              </span>
            )}
          </h4>
        </div>
        <div data-aos="zoom-in-up" className="baymax">
          <img className="baymax-home" src={baymax} alt="Baymax " />
        </div>
        <div className="mbs-btn">
          <a
            href={HammadCv}
            download="HammadCv"
            rel="noreferrer"
            target="_blank"
          >
            <Button classes="btn-round" text="Download CV" />
          </a>
        </div>
        <div className="size text-header">
          <h4 data-aos="fade-down" className="right-text">
            {/* Lorem ipsum is simply <br /> dummy text for the printing <br /> and
            typesetting industry */}
            Code is like humor. <br /> When you have to explain it, <br /> It’s
            bad really bad!
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Header;

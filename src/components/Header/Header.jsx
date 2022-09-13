import React, {useEffect} from "react";
import { Typewriter } from "react-simple-typewriter";
import baymax from "./../../images/baymaxhome.png";
import Aos from 'aos';
import 'aos/dist/aos.css';

import "./Header.css";
const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="header " data-aos="zoom-in">
      {/* <img className="line" src={line} /> */}
      <div className="left-text size text-header">
        <h4  >
          Hi! I am Hammad. <br />
          Your
          <span className="typing">
            <Typewriter
              loop
              // cursor
              // cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1000}
              words={[
                " web care companion",
                " web developer",
                " UI/UX designer",
              ]}
            />
          </span>
        </h4>
      </div>
      <div className="baymax">
        <img className="baymax-home" src={baymax} alt="Baymax " />
      </div>
      <div className="size text-header">
        <h4 className="right-text">
          Lorem ipsum is simply <br /> dummy text for the printing <br /> and
          typesetting industry
        </h4>
      </div>
    </div>
  );
};

export default Header;

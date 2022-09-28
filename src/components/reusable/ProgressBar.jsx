import React from "react";
import { useInView } from "react-intersection-observer";
// import { keyframes } from "styled-components";
import "./ProgressBar.css";
const ProgressBar = ({ width, title }) => {
  const { ref, inView } = useInView({});

  return (
    <>
      <p className="progressbarTitle">{title}</p>
      <div className="outerBox">
        <div
          ref={ref}
          style={{ width: width }}
          className={inView ? "innerBox" : ""}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;

import React from "react";
import { useInView } from "react-intersection-observer";
// import { keyframes } from "styled-components";
import "./ProgressBar.css";
const ProgressBar = ({ width, title, animation }) => {
  const { ref, inView } = useInView({});
  let x = "innerBox " + animation;
  return (
    <>
      <p className="progressbarTitle">{title}</p>
      <div className="outerBox">
        <div
          ref={ref}
          style={{ width: width }}
          className={inView ? x : ""}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;

import React from "react";
import "./button.css";
const Button = ({ classes, text }) => {
  const classname = "button " + classes;
  return (
    <>
      <button className={classname}>{text}</button>

      {/* <button className="button btn-sm">Hire Me</button>
      <button className="button btn-lg ">Leave a review</button> */}
    </>
  );
};

export default Button;

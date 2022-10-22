import React, { useRef, useEffect } from "react";
import Button from "../reusable/button";
import Title from "../reusable/Title";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Form.css";

const Form = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const form = useRef();
  const notify = () => toast.success("Message sent successfully");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dlg2s1p",
        "template_9wf3dqw",
        form.current,
        "uU8MRd-49wyrHN-C2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    notify();
  };

  return (
    <div id="contact">
      <Title title="Let's chat" />
      <div>
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="name-email">
            <input
              className="form-box"
              type="name"
              placeholder="Enter Your Name"
              name="name"
              data-aos="fade-right"
              data-aos-once="true"
              required
            />
            <input
              className="form-box"
              type="email"
              placeholder="Enter Your Email"
              name="email"
              data-aos="fade-left"
              data-aos-once="true"
              required
            />
          </div>
          <div className="text-area">
            <textarea
              className="form-box"
              name="message"
              placeholder="Type Your Message"
              cols="30"
              rows="10"
              data-aos="fade-up"
              data-aos-once="true"
              required
            />
          </div>
          <div>
            <Button classes="btn-round" text="Send Message" />
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Form;

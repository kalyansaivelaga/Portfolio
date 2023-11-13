import React, { useRef } from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedIn.png";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ng0q66i",
        "template_8tvtzvr",
        form.current,
        "O-07cv5L3sMWsTq7_"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with Includes
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="Walmart" className="clientImg" />
          <img src={Adobe} alt="Adobe" className="clientImg" />
          <img src={Microsoft} alt="Microsoft" className="clientImg" />
          <img src={Facebook} alt="Facebook" className="clientImg" />
        </div>
      </div>
      <div className="contact">
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">
            Please fill out the form below to discuss any work opportunities
          </span>
          <form
            action=""
            className="contactForm"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              className="name"
              placeholder="Your Name"
              name="from_name"
            />
            <input
              type="email"
              className="email"
              placeholder="Your Email"
              name="from_email"
            />
            <textarea
              className="msg"
              cols="30"
              rows="10"
              placeholder="Your Message"
              name="message"
            ></textarea>
            <button type="submit" value="Send" className="submitBtn">
              Submit
            </button>
            <div className="links">
              <img src={FacebookIcon} alt="FacebookIcon" className="link" />
              <img src={TwitterIcon} alt="TwitterIcon" className="link" />
              <img src={YoutubeIcon} alt="YoutubeIcon" className="link" />
              <img src={InstagramIcon} alt="InstagramIcon" className="link" />
              <img src={LinkedIn} alt="LinkedinIcon" className="llink" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

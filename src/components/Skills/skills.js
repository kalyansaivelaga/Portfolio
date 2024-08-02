import React from "react";
import "./skills.css";
import UIDesgin from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        I am a skilled and passionate web devoloper with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. I am proficient in
        HTML, CSS and javaScript, as well as ReactJs, NodeJs, MongoDB and Microfrontend.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesgin} alt="UI-Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design & Devolopment</h2>
            <p>UI and UX design and development focus on creating visually appealing interfaces and ensuring a seamless, user-centered experience.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="Web-Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design & Devolopment</h2>
            <p>Web Design and Development: Web design focuses on the aesthetics and usability of a website, while web development involves building the functional and technical aspects to bring the design to life.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="App-Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design & Devolopment</h2>
            <p>Crafting visually appealing and user-friendly interfaces (design) and building robust, functional applications (development) for optimal user experience and performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

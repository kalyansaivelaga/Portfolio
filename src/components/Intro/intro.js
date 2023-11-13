import React from "react";
import "./intro.css";
import bg from "../../assets/WhatsApp_Image_2023-11-10_at_11.49.56_AM-removebg-preview (1).png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">KalyanSai Velaga</span>
          <br />
          Website Designer
        </span>
        <p className="introPara">
          I am a skilled web designer with experience in creating <br></br>
          visually appealing and user friendly websites.
        </p>
        <Link to="">
          <button className="btn">
            <img src={btnImg} alt="" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="" className="bg" />
    </section>
  );
}

export default Intro;

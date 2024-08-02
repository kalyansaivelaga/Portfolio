import React from "react";
import "./intro.css";
import bg from "../../assets/croped.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">Kalyan Sai Velaga</span>
          <br />
          Web Devoloper
        </span>
        <p className="introPara">
          I am a skilled web devoloper with experience in creating&devoloping <br></br>
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

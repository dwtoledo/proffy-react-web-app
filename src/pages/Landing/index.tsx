import proffyLogo from "../../assets/images/logo.svg";
import proffyBanner from "../../assets/images/landing.svg";
import findTeacherIcon from "./../../assets/images/icons/study.svg";
import giveClassesIcon from "./../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "./../../assets/images/icons/purple-heart.svg";
import "./styles.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div id="landing-page">
      <div className="landing-page__content container">
        <div className="landing-page__logo">
          <figure>
            <img src={proffyLogo} alt="Proffy logo" />
            <figcaption>Find your perfect teacher!</figcaption>
          </figure>
        </div>

        <img
          className="landing-page__banner"
          src={proffyBanner}
          alt="Proffy users looking for the perfect teacher"
        />

        <div className="landing-page__buttons-wrapper">
          <Link to="/teachers">
            <button type="button" className="landing-page__find-teacher-bttn">
              <img src={findTeacherIcon} alt="Book Icon" />
              Find a teacher
            </button>
          </Link>

          <Link to="/form">
            <button type="button" className="landing-page__give-classes-bttn">
              <img src={giveClassesIcon} alt="Board Icon" />
              Give classes
            </button>
          </Link>
        </div>

        <span className="landing-page__connections">
          200 connections already made
          <img src={purpleHeartIcon} alt="Purple Heart" />
        </span>
      </div>
    </div>
  );
}

export default Landing;

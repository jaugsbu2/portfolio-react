import React from "react";
import Project from "../Project";
import projects from "../../projects";
import "../../styles/portfolio.css";

const styles = {
  header: {
    paddingLeft: 40,
    paddingBottom: 40,
    paddingTop: 20,
  },
};

export default function Portfolio() {
  return (
    <div className="work">
      <h1 style={styles.header}>Some of My Work</h1>
      <Project projects={projects} />
      {/* <div className="workcontainer">
        <div className="napster">
          <a
            href="https://jaugsbu2.github.io/napster2.0-with-youtube/"
            target={"_blank"}
            className="button"
          ></a>
          <div className="cardText">
            <a
              href="https://jaugsbu2.github.io/napster2.0-with-youtube/"
              target={"_blank"}
            >
              Napster Music Video Play Website
            </a>
            <a
              href="https://github.com/jaugsbu2/napster2.0-with-youtube"
              target={"_blank"} className="githubLogo"
            >
            </a>
          </div>
        </div>
        <div className="herd">
          <a
            href="https://cattle-tracker.herokuapp.com/"
            target={"_blank"}
            className="button"
          ></a>
          <div className="cardText">
            <a
              href="https://cattle-tracker.herokuapp.com/"
              target={"_blank"}
            >
              Herd Cattle Tracker
            </a>
            <a
              href="https://github.com/malxxy/cattle-tracker"
              target={"_blank"} className="githubLogo"
            >
            </a>
          </div>
        </div>
        <div className="blog">
          <a
            href="https://mysterious-beyond-13173.herokuapp.com/"
            target={"_blank"}
            className="button"
          ></a>
          <div className="cardText">
            <a
              href="https://mysterious-beyond-13173.herokuapp.com/"
              target={"_blank"}
            >
              Tech Blog
            </a>
            <a
              href="https://github.com/jaugsbu2/simple-blog"
              target={"_blank"} className="githubLogo"
            >
            </a>
          </div>
        </div>
        <div className="weather">
          <a
            href="https://jaugsbu2.github.io/06-challenge-weather-dashboard/"
            target={"_blank"}
            className="button"
          ></a>
          <div className="cardText">
            <a
              href="https://jaugsbu2.github.io/06-challenge-weather-dashboard/"
              target={"_blank"}
            >
              Weather Dashboard
            </a>
            <a
              href="https://github.com/jaugsbu2/06-challenge-weather-dashboard"
              target={"_blank"} className="githubLogo"
            >
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
}

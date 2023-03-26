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
    </div>
  );
}

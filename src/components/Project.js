import React from "react";

export default function Project({ projects }) {
  return (
    <div className="workcontainer">
      {projects.map((projects) => (
        <div className={projects.class} key={projects.id}>
          <a href={projects.deploymentURL} target={"_blank"} className="button"></a>
          <div className="cardText">
            <a href={projects.deploymentURL} target={"_blank"}>
              {projects.name}
            </a>
            <a
              href={projects.githubURL}
              target={"_blank"}
              className="githubLogo"
            ></a>
          </div>
        </div>
      ))}
    </div>
  );
}

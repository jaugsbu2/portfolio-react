import React from "react";
import "../../styles/about.css";

const styles = {
  header: {
    paddingLeft: 40,
    paddingBottom: 40,
    paddingTop:20,
  },
}

export default function About() {
  return (
    <div>
      <h1 style={styles.header}>Welcome</h1>
      <div className="aboutcontainer">
        <div className="p aboutflex">
        <img src="images/about-pic.jpeg" alt="Josh Augsburger Picture"></img>
        <p>
        As the son of the local small engine repair shop owner located in a
          small farming community in Ohio, it was an easy decision to get a
          Bachelors Degree in Mechanical Engineering after high school. After
          college I worked with GE Appliances in Louisvillle, KY. While
          completing the GE rotational engineering development program I got a
          Masters Degree in Mechanical Engineering, specializing in appliance
          design. I then decided to take a Senior Mechanical Engineering role
          with Smart Bar USA and moved into the Engineering Manager posiition
          for the company as the team grew. After a few years of managing the
          team, I decided to try to learn something new 
          and signed up a Software Development Bootcamp. Since being in
          the UC Berkeley Bootcamp, I have found software development to be very
          interesting and fun!<br></br>
          <br></br>
          
          I am currently the Engineering Manager for Smart Bar USA. Smart bar USA is a
          company that provides automated cocktail dispensers to the Hospitality
          industry. I oversee all engineering activities and development
          personnel for the business. Currently this includes a dedicated
          contract software development team of 3 developers, and one contract
          electronics engineer and mechanical engineer who work on an as needed
          basis for Smart Bar USA. In addition to managing the engineering team,
          I also do most of the mechanical design, R&D, testing, and validation
          of all of Smart Bar USA's products.
        </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../../styles/about.css";
import me from "../../assets/about-pic.jpg"

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
        <img src={me} alt="Josh Augsburger Picture"></img>
        <p>
        As the son of a small engine repair shop owner located in a
          small farming community in Ohio, it was an easy decision to go to college for Mechanical Engineering. 
          While in college i did numerous internships with GE Appliances in Louisvillle, KY and, after graduating, I joined the General Electric Edison Engineering Development program where I got a
          Masters Degree in Mechanical Engineering specializing in appliance
          design. I then decided to take a Senior Mechanical Engineering role
          with Smart Bar USA and moved into the Engineering Manager posiition
          for the company as the team grew. A few months ago, I decided to try to learn something new 
          and enrolled in a coding bootcamp. Since being in
          the UC Berkeley Coding Bootcamp, I have found full stack web development to be very
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

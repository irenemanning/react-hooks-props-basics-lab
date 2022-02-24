import React from "react";


function About(props) {
  const biotext = props.bio
  return (
    <div id="about">
      <h2>About Me</h2>
      {biotext.length > 0 &&
      <p>{props.bio}</p>
      }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <div>{props.links}</div>
    </div>
  );
}



export default About;

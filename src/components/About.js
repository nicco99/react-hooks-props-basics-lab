import React from "react";
import user from "../data/user";
import Links from "./Links";


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {!props.bio?null:<p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt={props.bio} />
      <Links github={user.links.github} linkedIn={user.links.linkedin}/> 
    </div>
  );
}

export default About;

import React from "react";
import { Image } from 'semantic-ui-react';

function Project(props) {

  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <Image src={props.src} />
      <p>{props.title}</p>
    </a>
  );
}


export default Project;
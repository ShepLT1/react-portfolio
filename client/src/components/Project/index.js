import React from "react";
import { Grid, Image } from 'semantic-ui-react';
import ProjectImage from '../../images/placeholder_image.png';

function Project() {

  return (
    <Grid.Column>
      <Image src={ProjectImage} />
    </Grid.Column>
  );
}


export default Project;
import React from "react";
import { Grid } from 'semantic-ui-react';
import Project from '../components/Project';

function Portfolio() {


  return (
    <Grid centered stackable>
      <Grid.Row>
        <h3>Portfolio</h3>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Project />
        <Project />
      </Grid.Row>
      <Grid.Row columns={2}>
        <Project />
        <Project />
      </Grid.Row>
      <Grid.Row columns={2}>
        <Project />
        <Project />
      </Grid.Row>
    </Grid>
  );
}


export default Portfolio;

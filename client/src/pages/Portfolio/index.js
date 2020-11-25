import React from "react";
import { Grid } from 'semantic-ui-react';
import Project from '../../components/Project';
import "../mainStyle.css";

function Portfolio() {

  return (
    <Grid centered stackable className="main-container">
      <Grid.Row>
        <h2>Portfolio</h2>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Project />
        </Grid.Column>
        <Grid.Column>
          <Project />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Project />
        </Grid.Column>
        <Grid.Column>
          <Project />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Project />
        </Grid.Column>
        <Grid.Column>
          <Project />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Portfolio;

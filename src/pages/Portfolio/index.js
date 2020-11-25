import React from "react";
import { Grid } from 'semantic-ui-react';
import Project from '../../components/Project';
import Heading from '../../components/Header';
import BreakawayThumbnail from '../../images/breakaway.png'
import COVIDThumbnail from '../../images/covid-tracker.png'
import PlannerThumbnail from '../../images/day-planner.png'
import PasswordThumbnail from '../../images/password-generator.png'
import WeatherThumbnail from '../../images/weather-forecast.png'
import SherpaThumbnail from '../../images/5sherpas.png'
import "../mainStyle.css";

function Portfolio() {

  return (
    <Grid centered stackable className="main-container">
      <Grid.Row>
        <Heading header="Portfolio" />
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Project link="https://breakaway-vacay.herokuapp.com/" src={BreakawayThumbnail} title="Breakaway" />
        </Grid.Column>
        <Grid.Column>
          <Project link="https://sheplt1.github.io/covid-tracker/" src={COVIDThumbnail} title="COVID-19 Tracker" />        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Project link="https://sheplt1.github.io/Day-Planner/" src={PlannerThumbnail} title="Day Planner" />
        </Grid.Column>
        <Grid.Column>
          <Project link="https://sheplt1.github.io/Password-Generator/" src={PasswordThumbnail} title="Password Generator" />        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Project link="https://sheplt1.github.io/hows-the-weather/" src={WeatherThumbnail} title="Weather Forecaster" />
        </Grid.Column>
        <Grid.Column>
          <Project link="https://5sherpas.com/" src={SherpaThumbnail} title="5sherpas" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <h2>Github Repositories</h2>

          <p><a href="https://github.com/MVC-5/breakaway" target="_blank" rel="noopener noreferrer">Breakaway</a>
          </p>

          <p><a href="https://github.com/ShepLT1/covid-tracker"
            target="_blank" rel="noopener noreferrer">COVID-19 Tracker</a></p>

          <p><a href="https://github.com/ShepLT1/Day-Planner" target="_blank" rel="noopener noreferrer">Day
        Planner</a></p>

          <p><a href="https://github.com/ShepLT1/Password-Generator"
            target="_blank" rel="noopener noreferrer">Password Generator</a></p>

          <p><a href="https://github.com/ShepLT1/hows-the-weather"
            target="_blank" rel="noopener noreferrer">Weather Forecaster</a></p>

          <p><a href="https://github.com/MVC-5/5sherpas"
            target="_blank" rel="noopener noreferrer">5sherpas</a></p>

        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Portfolio;

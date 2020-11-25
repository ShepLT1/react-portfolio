import React from "react";
import { Grid, Image } from 'semantic-ui-react';
import AboutImage from '../../images/placeholder_image.png';

function AboutMe() {

  return (
    <Grid centered stackable className="main-container">
      <Grid.Row>
        <h2>About Me</h2>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <Image src={AboutImage} />
        </Grid.Column>
        <Grid.Column width={9}>
          <p>I am a full-stack web developer proficient in Javascript-based languages. Prior to my web development education via the University of Washington, I obtained a Bachelor of Science Degree in Psychology with the intention of later applying to a graduate program to become a prosthetics and orthotics clinician. My University of Washington coursework in preparation for a prosthetics career included biology, chemistry, physics, and mathematics.</p>

          <p>After graduation, I was unfortunately unable to enroll in a prosthetics graduate program due to the development of back issues and the demanding physical nature of a prosthetics career. Since then, I have worked on the administrative side of the healthcare field and am currently employed as a Patient Care Coordinator for a gastroenterology clinic at Swedish Medical Group in Ballard. In my free time, I continue to develop web applications as I am seeking an entry level position as a full-stack engineer.</p>
        </Grid.Column>
        <Grid.Column width={3}>
          <h4>Proficiencies</h4>
          <ul>
            <li>React</li>
            <li>Node</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Computer Science</li>
            <li>UI/UX Design</li>
            <li>HTML/CSS/JS</li>
          </ul>
        </Grid.Column>
      </Grid.Row>

    </Grid>
  );
}

export default AboutMe;
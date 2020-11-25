import React from "react";
import { Grid, Form, Button, Input, TextArea } from 'semantic-ui-react';

function Contact() {

  return (
    <Grid centered stackable className="main-container">
      <Grid.Row>
        <h2>Contact</h2>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={10}>
          <Form>
            <Form.Group widths='equal'>
              <Form.Field
                id='form-input-control-first-name'
                control={Input}
                label='Name'
                placeholder='Name'
              />
              <Form.Field
                id='form-input-control-last-email'
                control={Input}
                label='Email'
                placeholder='Email'
              />
            </Form.Group>
            <Form.Field
              id='form-textarea-control-opinion'
              control={TextArea}
              label='Message'
              placeholder='Message'
            />
            <Form.Field
              control={Button}
              content='Submit'
            />
          </Form>
        </Grid.Column>
        <Grid.Column width={6}>
          <p>Email: luke.t.shepherd@gmail.com</p>

          <p>Phone: (425) 736-6565</p>

          <br />

          <p><a href="./Assets/Luke-Shepherd-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></p>

          <p><a href="https://github.com/ShepLT1" target="_blank" rel="noopener noreferrer">Github Profile</a></p>

          <p><a href="https://www.linkedin.com/in/luke-t-shepherd" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        </Grid.Column>

      </Grid.Row>

    </Grid >
  );
}

export default Contact;
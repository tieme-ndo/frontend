import React from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

import {
  Container,
  Button,
  Grid,
  Header,
  Segment,
  Form,
  Image,
  Message
} from 'semantic-ui-react';
import logo from '../../../assets/images/tiemendo_logo.jpg';

const PasswordResetForm = props => {
  const { state, handleSubmit, handleInputChange } = props;

  return (
    <>
      <Container>
        <Grid
          textAlign="center"
          style={{ height: '85vh' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 330 }}>
            {state.errors.length && (
              <Message error>
                <Message.List>
                  {state.errors.map(error => (
                    <div key={uuid()}>
                      <Message.Item>{`${Object.values(error)}`}</Message.Item>
                    </div>
                  ))}
                </Message.List>
              </Message>
            )}

            <Segment>
              <Image src={logo} centered alt="tiemendo logo" size="small" />

              <Header as="h3" style={{ marginBottom: '30px' }}>
                Reset password
              </Header>

              <Form size="large" onSubmit={handleSubmit}>
                <Segment width={5}>
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="old Password"
                    type="password"
                    name="oldPassword"
                    value={state.oldPassword}
                    onChange={handleInputChange}
                  />

                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="New Password"
                    type="password"
                    name="newPassword"
                    value={state.newPassword}
                    onChange={handleInputChange}
                  />

                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Confirm New Password"
                    type="password"
                    name="confirmNewPassword"
                    value={state.confirmNewPassword}
                    onChange={handleInputChange}
                  />

                  {state.resetting ? (
                    <Button
                      loading
                      disabled
                      color="teal"
                      fluid
                      size="large"
                      content="Reset"
                    />
                  ) : (
                    <Form.Group widths="equal">
                      <Button color="teal" content="Reset" fluid />
                      <Link to="/" style={{ width: '100%' }}>
                        <Button content="Cancel" fluid />
                      </Link>
                    </Form.Group>
                  )}
                </Segment>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

export default PasswordResetForm;

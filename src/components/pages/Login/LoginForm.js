import React from 'react';
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

const LoginForm = props => {
  const { state, handleSubmit, handleChange } = props;

  return (
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
              Log in to your account
            </Header>

            <Form size="large" onSubmit={handleSubmit}>
              <Segment width={5}>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  name="username"
                  type="text"
                  value={state.username}
                  onChange={handleChange}
                />

                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                />

                {state.loginIn ? (
                  <Button
                    loading
                    disabled
                    color="teal"
                    fluid
                    size="large"
                    content="Login"
                  />
                ) : (
                  <Button color="teal" fluid content="Login" />
                )}
              </Segment>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default LoginForm;

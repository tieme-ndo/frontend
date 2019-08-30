import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import {
  Container,
  Button,
  Grid,
  Header,
  Segment,
  Form,
  Message,
  Checkbox
} from 'semantic-ui-react';

const CreateAccount = props => {
  const { state, handleSubmit, handleChange, checkboxChange } = props;
  setTimeout(300, () => (state.message = ''));
  return (
    <Container>
      <Grid style={{ height: '85vh' }} centered>
        <Grid.Column style={{ maxWidth: 350 }}>
          {state.message && <Message success>{state.message}</Message>}
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
          )}{' '}
          <Header as='h3' style={{ marginBottom: '30px', textAlign: 'center' }}>
            Create New Account
          </Header>
          <Form onSubmit={handleSubmit}>
            <Segment width={5}>
              <Form.Field>
                <label htmlFor='username'>Username</label>
                <Form.Input
                  fluid
                  id='username'
                  name='username'
                  type='text'
                  value={state.username}
                  onChange={handleChange}
                  data-testid='username-field'
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='password'>Password</label>
                <Form.Input
                  fluid
                  id='password'
                  name='password'
                  type='password'
                  value={state.password}
                  onChange={handleChange}
                  data-testid='password-field'
                />
              </Form.Field>
              <Form.Field>
                <Checkbox
                  label='Is Admin?'
                  name='isAdmin'
                  type='checkbox'
                  id='is-admin'
                  onChange={checkboxChange}
                  checked={state.isAdmin}
                  data-testid='admin-checkbox'
                />
              </Form.Field>
              {state.CreateAccount ? (
                <Button
                  loading
                  disabled
                  color='teal'
                  fluid
                  size='large'
                  content='Add Staff'
                />
              ) : (
                <Button color='teal' fluid content='Add Staff' />
              )}
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default CreateAccount;

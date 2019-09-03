import React from 'react';
import uuid from 'uuid';

import PageHeader from '../../common/PageHeader/PageHeader';
import {
  Container,
  Button,
  Grid,
  Header,
  Segment,
  Form,
  Checkbox,
  Message
} from 'semantic-ui-react';

const AddStaff = props => {
  const { state, handleSubmit, handleChange, checkboxChange } = props;
  return (
    <>
      <PageHeader />

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

            <Header
              as="h3"
              style={{ marginBottom: '30px', textAlign: 'center' }}
            >
              Create New Account
            </Header>
            <Form onSubmit={handleSubmit}>
              <Segment width={5}>
                <Form.Field>
                  <label htmlFor="username">Username</label>
                  <Form.Input
                    fluid
                    id="username"
                    name="username"
                    type="text"
                    value={state.username}
                    onChange={handleChange}
                    data-testid="username-field"
                  />
                </Form.Field>
                <Form.Field>
                  <label htmlFor="password">Password</label>
                  <Form.Input
                    fluid
                    id="password"
                    name="password"
                    type="password"
                    value={state.password}
                    onChange={handleChange}
                    data-testid="password-field"
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    label="Check this box to make this user Admin"
                    name="isAdmin"
                    type="checkbox"
                    id="is-admin"
                    onChange={checkboxChange}
                    checked={state.isAdmin}
                    data-testid="admin-checkbox"
                  />
                </Form.Field>
                {state.createAccount ? (
                  <Button
                    loading
                    disabled
                    color="teal"
                    fluid
                    size="large"
                    content="Loading..."
                  />
                ) : (
                  <Button color="teal" fluid content="Add Staff" />
                )}
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

export default AddStaff;

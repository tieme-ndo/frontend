<<<<<<< HEAD
import React from 'react';
import { Grid, Segment, Step } from 'semantic-ui-react';

const EditCollection = props => {
//   console.log(props);
  return (
    <div data-testid="edit-collection-component">
      <h1>Edit Collection</h1>
      <Segment>
        <Grid>
          <Grid.Column width={5}>
            <Step.Group vertical>
              <Step>
                <Step.Content>
                  <Step.Description>
                    <h3>
                      {' '}
                      <a href="/">Staff name edit Farmer’s name record</a>
                    </h3>
                  </Step.Description>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Step.Description>
                    <h3>
                      {' '}
                      <a href="/">Staff name edit Farmer’s name record</a>
                    </h3>
                  </Step.Description>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Step.Description>
                    <h3>
                      {' '}
                      <a href="/">Staff name edit Farmer’s name record</a>
                    </h3>
                  </Step.Description>
                </Step.Content>
              </Step>
            </Step.Group>
          </Grid.Column>
          <Grid.Column width={11}>
            <Segment>
              Join Solcioty Fitness in our fight to raise money for numerous
              organizations and charities in our community!We are partnering up
              with local health and wellness businesses to raise money for the
              charity of their preference. We will compete in a series of field
              day activities that are all fitness based in order to create a fun
              and competitive environment with the reward of giving back to our
              community. Each team will pick a charity that hits home for their
              business, and we will be competing in these different events to
              win the jackpot for the individual charities.$20 of your admission
              fee will go towards the jackpot while the other $15 will go
              towards your individual team's charity, so that ev…
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
=======
import React, { useState } from 'react';
import { Grid, Segment, Table, TableHeader, Button } from 'semantic-ui-react';
import styled from 'styled-components';

import TestImage from '../../../assets/images/tiemendo_logo.jpg';

const Div = styled.div`
  strike {
    color: red;
  }
  .update {
    color: green;
  }
  button {
    red {
      color: red;
    }
    green {
      color: green;
    }
  }
`;

const mockData = {
  requested_changes: {
    personalInfo: {
      firstName: 'Joe',
      middleName: '',
      image: TestImage
    },
    farmInfo: {
      foo: ['bar', 'lorem', 'ipsum']
    }
  },
  original_data: {
    personalInfo: {
      firstName: 'Mark',
      middleName: 'Frank',
      image: TestImage
    },
    farmInfo: {
      foo: ['dolar']
    }
  },
  id: 'jgatgosbsdpb',
  edited_by: 'AccountName',
  datetime: '424284204'
};

const wholeObject = [];

const display = () => {
  const oldData = mockData.original_data;
  const newData = mockData.requested_changes;

  for (let key in oldData) {
    for (let key2 in oldData[key]) {
      wholeObject.push(
        `${key2} : ${oldData[key][key2]}, ${newData[key][key2]}`
      );
    }
  }
};

console.log(display());

const EditCollection = props => {
  console.log(props.location.pathname);
  return (
    <Div data-testid="edit-collection-component">
      <h1>Edit Collection</h1>
      <div>
        <p> {`Edited by: ${mockData.edited_by}`}</p>
        <p> Farmer Record: John Doe</p>
        <p>When: 20th Sept</p>
      </div>
      <Table celled>
        <TableHeader>
          <Table.Row>
            <Table.HeaderCell>Fields</Table.HeaderCell>
            <Table.HeaderCell>Previous Value</Table.HeaderCell>
            <Table.HeaderCell>Update Value</Table.HeaderCell>
          </Table.Row>
        </TableHeader>
        <Table.Body>
          {wholeObject.map(value => (
            <Table.Row>
              <Table.Cell>
                <b> {value.split(':')[0]}</b>
              </Table.Cell>
              <Table.Cell>
                <strike>{value.split(',')[0].split(':')[1]}</strike>
              </Table.Cell>
              <Table.Cell className="update">{value.split(',')[1]}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button floated="right" className="red">
        Reject
      </Button>
      <Button floated="right" className="green">
        Accept
      </Button>
    </Div>
>>>>>>> a781a048da50c198711494598c851e1397cff43f
  );
};

export default EditCollection;

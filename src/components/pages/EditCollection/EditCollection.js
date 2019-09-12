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
  );
};

export default EditCollection;

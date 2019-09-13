import React, { useState } from 'react';
import { Grid, Segment, Table, TableHeader, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import uuid from 'uuid';

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
  img {
    width: 50px;
    height: 50px;
  }
`;

const mockData = {
  requested_changes: {
    personalInfo: {
      firstName: 'Joe',
      middleName: '',
      image_url: TestImage
    },
    farmInfo: {
      crops_cultivated: ['bar', 'lorem', 'ipsum'],
      animals_or_birds: ['goat', 'cow', 'pig']
    }
  },
  original_data: {
    personalInfo: {
      firstName: 'Mark',
      middleName: 'Frank',
      image_url: TestImage
    },
    farmInfo: {
      crops_cultivated: ['dolar'],
      animals_or_birds: ['goat', 'cow', 'pig', 'sheep', 'bird']
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
      wholeObject.push([key2, oldData[key][key2], newData[key][key2]]);
    }
  }
};
console.log(wholeObject);

display();

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
          {wholeObject.map(value =>
            value[0] === 'image_url' ? (
              <Table.Row key={uuid()}>
                <Table.Cell>
                  <b>Image</b>
                </Table.Cell>
                <Table.Cell>
                  <img src={value[1]} alt="farmer" />
                </Table.Cell>
                <Table.Cell>
                  <img src={value[2]} alt="farmer" />
                </Table.Cell>
              </Table.Row>
            ) : value[0] === 'animals_or_birds' ||
              value[0] === 'crops_cultivated' ? (
              <Table.Row key={uuid()}>
                <Table.Cell>
                  <b> {value[0]}</b>
                </Table.Cell>
                <Table.Cell>
                  <strike>
                    {value[1].map(val => (
                      <b>
                        {val} <br />
                      </b>
                    ))}
                  </strike>
                </Table.Cell>
                <Table.Cell className="update">
                  {' '}
                  {value[2].map(val => (
                    <b>
                      {val} <br />
                    </b>
                  ))}
                </Table.Cell>
              </Table.Row>
            ) : (
              <Table.Row key={uuid()}>
                <Table.Cell>
                  <b> {value[0]}</b>
                </Table.Cell>
                <Table.Cell>
                  <strike>{value[1]}</strike>
                </Table.Cell>
                <Table.Cell className="update">{value[2]}</Table.Cell>
              </Table.Row>
            )
          )}
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

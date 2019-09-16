import React, { useState, useEffect } from 'react';
import { Table, TableHeader, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import uuid from 'uuid';
import PropTypes from 'prop-types';

import withRestrictedAccess from '../../hoc/withRestrictedAccess';
import {
  getChangeRequestsById,
  approveChangeRequest,
  rejectChangeRequest
} from '../../../utils/handlers/changeRequestHandler';
import moment from 'moment';

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

const EditCollection = ({ match, history }) => {
  const [state, setState] = useState({
    data: undefined,
    cleanedData: []
  });
  console.log(history.push('/'));
  useEffect(() => {
    getChangeRequestsById(match.params.id)
      .then(data => {
        const oldData = data.original_data;
        const newData = data.requested_changes;
        const cleanedData = [];
        for (let key in oldData) {
          for (let key2 in oldData[key]) {
            cleanedData.push([key2, oldData[key][key2], newData[key][key2]]);
          }
        }
        setState(prevState => {
          return {
            ...prevState,
            data,
            cleanedData
          };
        });
      })
      .catch(err => err);
  }, []);

  const { data, cleanedData } = state;

  return (
    <Div data-testid="edit-collection-component">
      <h1>Edit Collection</h1>
      {data ? (
        <div>
          <p> {`Edited by: ${data.change_requested_by}`}</p>
          <p> Farmer Record: {data.farmer_name}</p>
          <p>When: {moment(data.datetime).format('LLLL')}</p>{' '}
        </div>
      ) : null}

      <Table celled>
        <TableHeader>
          <Table.Row>
            <Table.HeaderCell>Fields</Table.HeaderCell>
            <Table.HeaderCell>Previous Value</Table.HeaderCell>
            <Table.HeaderCell>Update Value</Table.HeaderCell>
          </Table.Row>
        </TableHeader>
        <Table.Body>
          {cleanedData.map(value =>
            value[0] === 'image_url' ? (
              <Table.Row key={uuid()}>
                <Table.Cell>
                  <b>Image</b>
                </Table.Cell>
                <Table.Cell>
                  {value[1] ? <img src={value[1]} alt="farmer" /> : null}
                </Table.Cell>
                <Table.Cell>
                  {value[2] ? <img src={value[2]} alt="farmer" /> : null}
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
                      <b key={uuid()}>
                        {val} <br />
                      </b>
                    ))}
                  </strike>
                </Table.Cell>
                <Table.Cell className="update">
                  {' '}
                  {value[2].map(val => (
                    <b key={uuid()}>
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
      <Button
        floated="right"
        className="red"
        onClick={() => rejectChangeRequest(match.params.id, history)}
      >
        Reject
      </Button>
      <Button
        floated="right"
        className="green"
        onClick={() => approveChangeRequest(match.params.id, history)}
      >
        Accept
      </Button>
    </Div>
  );
};

EditCollection.propTypes = {
  match: PropTypes.object
};

export default withRestrictedAccess(EditCollection);

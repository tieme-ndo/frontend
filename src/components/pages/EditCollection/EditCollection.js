/** @format */

import React, { useState, useEffect } from 'react';
import { Table, TableHeader, Button } from 'semantic-ui-react';
/* import { Link } from 'react-router-dom'; */
import styled from 'styled-components';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import moment from 'moment';
import { toast } from 'react-toastify';
import {
  getChangeRequestsById,
  approveChangeRequest,
  rejectChangeRequest
} from '../../../utils/handlers/changeRequestHandler';

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

const EditCollection = ({ match, history, appStateShouldUpdate }) => {
  const [state, setState] = useState({
    data: undefined,
    cleanedData: []
  });

  useEffect(() => {
    getChangeRequestsById(match.params.id)
      .then(data => {
        const oldData = data.original_data;
        const newData = data.requested_changes;
        const cleanedData = [];
        let key, key2;
        for (key in oldData) {
          for (key2 in oldData[key]) {
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
      .catch(err => toast.error(err));
  }, [match]);

  const { data, cleanedData } = state;

  return (
    <Div data-testid="edit-collection-component">
      <h1>Edit Collection</h1>
      {data && (
        <div>
          <p>
            <strong>Edited by:</strong> {data.change_requested_by}
          </p>
          <p>
            <strong>Farmer Record:</strong> {data.farmer_name}
          </p>
          <p>
            <strong>When: </strong> {moment(data.datetime).format('LLLL')}
          </p>
        </div>
      )}

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
                  <strong>Image</strong>
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
                  <strong> {value[0]}</strong>
                </Table.Cell>
                <Table.Cell>
                  <strike>
                    {value[1].map(val => (
                      <strong key={uuid()}>
                        {val} <br />
                      </strong>
                    ))}
                  </strike>
                </Table.Cell>
                <Table.Cell className="update">
                  {' '}
                  {value[2].map(val => (
                    <strong key={uuid()}>
                      {val} <br />
                    </strong>
                  ))}
                </Table.Cell>
              </Table.Row>
            ) : (
              <Table.Row key={uuid()}>
                <Table.Cell>
                  <strong> {value[0]}</strong>
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
        onClick={event => {
          event.preventDefault();
          rejectChangeRequest(match.params.id, history, appStateShouldUpdate);
        }}
      >
        Reject
      </Button>
      <Button
        floated="right"
        className="green"
        onClick={event => {
          event.preventDefault();
          approveChangeRequest(match.params.id, history, appStateShouldUpdate);
        }}
      >
        Accept
      </Button>
    </Div>
  );
};

EditCollection.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  appStateShouldUpdate: PropTypes.func
};

export default EditCollection;

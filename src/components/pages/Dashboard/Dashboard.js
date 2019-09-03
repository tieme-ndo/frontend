import React from 'react';
import styled from 'styled-components';
import { Header, Container, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import PageHeader from '../../common/PageHeader/PageHeader';
import StyledTable from '../../common/Table/Table';
import tableColumLabels from './tableColumLabels';
import { getFarmersHandler } from '../../../utils/handlers/farmerHandlers';
import parseObjectContentToString from './parseObjectContentToString';

const Dashboard = () => {
  const [data, setData] = React.useState([]);

  const columns = React.useMemo(tableColumLabels, []);

  React.useEffect(() => {
    let isSubscribed = true;

    getFarmersHandler().then(farmers => {
      if (isSubscribed) {
        setData(parseObjectContentToString(farmers));
      }
    });
    return () => (isSubscribed = false);
  }, []);

  return (
    <>
      <PageHeader />

      <Menu secondary>
        <Container>
          <Menu.Item>
            <Header as="h1">All Farmers</Header>
          </Menu.Item>

          <Menu.Menu position="right">
            <AddFarmerLink to="/addfarmer">Add farmer</AddFarmerLink>
          </Menu.Menu>
        </Container>
      </Menu>

      <Container>
        <StyledTable
          columns={columns}
          data={React.useMemo(() => data, [data])}
        />
      </Container>
    </>
  );
};

export default Dashboard;

const AddFarmerLink = styled(Link)`
  color: #fff;
  background-color: #00b5ad;
  display: block;
  border-radius: 5px;
  transition: color 0.2s ease;
  line-height: 40px;
  height: 40px;
  width: 120px;
  text-align: center;
  font-size: 1.2rem;
  box-shadow: 0 0 0 0 rgba(34, 36, 38, 0.15) inset;

  &:hover {
    background-color: #009c95;
    color: #fff;
    text-shadow: none;
  }
`;

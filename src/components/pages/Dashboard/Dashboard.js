import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DashboardHeader from './DashboardHeader';
import tableColumLabels from './tableColumLabels';
import DashboardTable from '../../common/Table/Table';
import LoadingIndicator from './LoadingIndicator';
import FarmersStatistic from '../../partials/FarmersStatistic';

const Dashboard = ({ farmers, statistics, history }) => {
  const Title = <Header as="h1">All Farmers</Header>;
  const columns = React.useMemo(tableColumLabels, []);

  return (
    <div data-testid="dashboard-render-test">
      <DashboardHeader
        leftElement={Title}
        rightElement={
          <Link style={{ color: 'white' }} to="/addfarmer">
            <Button color="teal" fixed="right">
              Add Farmer
            </Button>
          </Link>
        }
      />

      <FarmersStatistic farmersStatistic={statistics} />

      {farmers && farmers.length ? (
        <DashboardTable history={history} columns={columns} data={farmers} />
      ) : (
        <LoadingIndicator />
      )}
    </div>
  );
};

Dashboard.propTypes = {
  farmers: PropTypes.array,
  history: PropTypes.object
};

export default Dashboard;

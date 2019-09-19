import React, { useEffect, useState } from 'react';
import { Header, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import DashboardHeader from './DashboardHeader';
import tableColumLabels from './tableColumLabels';
import DashboardTable from '../../common/Table/Table';
import LoadingIndicator from './LoadingIndicator';
import FarmersStatistic from '../../partials/FarmersStatistic';
import { getfarmerStatisticsHandler } from '../../../utils/handlers/farmerHandlers';

const Dashboard = ({ farmers, history }) => {
  const [data, setData] = useState([]);
  const [farmersStatistic, setFarmersStatistic] = useState(undefined);

  const Title = <Header as="h1">All Farmers</Header>;

  const columns = React.useMemo(tableColumLabels, []);

  useEffect(() => {
    if (farmers) {
      setData(farmers);
      getfarmerStatisticsHandler()
        .then(statistics => {
          setFarmersStatistic(statistics);
        })
        .catch(error => {
          setFarmersStatistic({});
          toast.error(error.message);
        });
    } else {
      setData([]);
    }
  }, [farmers]);

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

      <FarmersStatistic farmersStatistic={farmersStatistic} />

      {data.length ? (
        <DashboardTable history={history} columns={columns} data={data} />
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

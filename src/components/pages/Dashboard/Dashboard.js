import React, { useEffect, useState } from 'react';
import { Dimmer, Loader, Segment, Header, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import DashboardHeader from './DashboardHeader';
import tableColumLabels from './tableColumLabels';
import DashboardTable from '../../common/Table/Table';
import LoadingIndicator from './LoadingIndicator';
import { Header, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FarmersStatistic from '../../partials/FarmersStatistic';
import { getfarmerStatisticsHandler } from '../../../utils/handlers/farmerHandlers';

const Dashboard = ({ farmers, history }) => {
  const [data, setData] = useState([]);
  const [farmersStatistic, setFarmersStatistic] = useState({});
  const [farmersStatisticsLoading, setFarmersStatisticsLoading] = useState(
    true
  );

  const Title = <Header as="h1">All Farmers</Header>;

  const columns = React.useMemo(tableColumLabels, []);

  useEffect(() => {
    if (farmers) {
      setData(farmers);
    } else {
      setData([]);
    }
  }, [farmers]);

  useEffect(() => {
    setFarmersStatisticsLoading(true);
    getfarmerStatisticsHandler()
      .then(res => {
        setFarmersStatistic(res);
        setFarmersStatisticsLoading(false);
      })
      .catch(error => {
        toast.error(error.message);
        setFarmersStatisticsLoading(false);
      });
    //   .finally(() => setFarmersStatisticsLoading(false));
  }, []);

  const renderFarmersStatistic = () => {
    if (farmersStatisticsLoading) {
      return (
        <Segment
          style={{ marginBottom: '50px', boxShadow: 'none', border: '0' }}
        >
          <Dimmer active inverted>
            <Loader inverted>Loading farmers statistic</Loader>
          </Dimmer>
        </Segment>
      );
    }

    if (Object.keys(farmersStatistic).length === 0) {
      return (
        <Segment secondary style={{ textAlign: 'center' }}>
          Failed to retreive farmer statistics
        </Segment>
      );
    }

    return <FarmersStatistic {...farmersStatistic} />;
  };

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

      {renderFarmersStatistic()}

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

import React, { useEffect } from 'react';
import { Dimmer, Loader, Segment, Header, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import DashboardHeader from './DashboardHeader';
import tableColumLabels from './tableColumLabels';
import DashboardTable from '../../common/Table/Table';
import LoadingIndicator from './LoadingIndicator';
import withRestrictedAccess from '../../hoc/withRestrictedAccess';
import FarmersStatistic from '../../partials/FarmersStatistic';
import { getfarmerStatisticsHandler } from '../../../utils/handlers/farmerHandlers';

const Dashboard = ({ farmers, history }) => {
  const [data, setData] = React.useState([]);
  const [farmersStatistic, setFarmersStatistic] = React.useState({});

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
    getfarmerStatisticsHandler()
      .then(res => setFarmersStatistic(res))
      .catch(error => {
        toast.error(error.message);
      });
  }, []);

  const renderFarmersStatistic = () => {
    if (Object.keys(farmersStatistic).length === 0) {
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

export default withRestrictedAccess(Dashboard, false);

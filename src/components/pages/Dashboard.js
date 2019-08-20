import React from 'react';
import PageHeader from '../ui/PageHeader';

const Dashboard = () => {
  const Title = 'Dashboard';
  const Button = <button>Add Farmer</button>;

  return <PageHeader leftElement={Title} rightElement={Button} />;
};

export default Dashboard;

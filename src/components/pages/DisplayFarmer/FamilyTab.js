import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default function FamilyTab(props) {
  const data = props.farmer.familyInfo;
  console.log(data);

  return (
    <Grid columns={2}>
      <Grid.Column>
        <Header.Subheader>Family Income Per Month</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.family_income_per_month}
        </Header>
        <Header.Subheader>Family Size</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.family_size}
        </Header>
        <Header.Subheader>Number of Dependant</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.number_of_dependant}
        </Header>
        <Header.Subheader>Highest Level of Education of Dependants</Header.Subheader>
        <Header
          size="tiny"
          style={{ marginTop: '0.1rem', marginBottom: '0rem' }}
        >
          {data.highest_level_of_dependent}
        </Header>
      </Grid.Column>
    </Grid>
  );
}

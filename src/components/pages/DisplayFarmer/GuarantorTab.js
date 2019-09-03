import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default function GuarantorTab(props) {
  const data = props.farmer.guarantor;
  console.log(data);

  return (
    <Grid columns={2}>
      <Grid.Column>
        <Header.Subheader>Name</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.grt_title + " " + data.grt_first_name + " " + data.grt_surname}
        </Header>
        <Header.Subheader>Phone</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.grt_phone}
        </Header>
        <Header.Subheader>Occupation</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.grt_occupation}
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Header.Subheader>Gender</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
          {data.grt_gender}
        </Header>
        <Header.Subheader>Relationship</Header.Subheader>
        <Header size="tiny"
          style={{ marginTop: '0.1rem' }}>
          {data.grt_relations}
        </Header>
        <Header.Subheader>Address</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem', marginBottom: '0rem' }}>
          {data.grt_residential_address}
        </Header>
        <Header size="tiny" style={{ marginTop: '0rem', marginBottom: '0rem' }}>
          {data.grt_district}
        </Header>
        <Header size="tiny" style={{ marginTop: '0rem' }}>
          {data.grt_region}
        </Header>
      </Grid.Column>
    </Grid>
  );
}

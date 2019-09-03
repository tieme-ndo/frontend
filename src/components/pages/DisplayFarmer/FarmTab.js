import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

export default function FarmTab(props) {
  const data = props.farmer.farmInfo;

  return (
    <Grid columns={2} stackable>
      <Grid.Column>
        <Header.Subheader>Location</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem', marginBottom: '0rem' }}>
          {data.location_of_farm}
        </Header>
        <Header size="tiny"style={{ marginTop: '0rem' }}>{'Landmark: ' + data.farm_nearest_landmark}</Header>
        <Header.Subheader>Crops</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
        {data.crops_cultivated.join(", ")}
        </Header>
      </Grid.Column>
      <Grid.Column>
        <Header.Subheader>Acres</Header.Subheader>
        <Header
          size="tiny"
          style={{ marginTop: '0.1rem', marginBottom: '2.285715rem'  }}
        >
          {data.number_of_acres}
        </Header>
        <Header.Subheader>Livestock</Header.Subheader>
        <Header size="tiny" style={{ marginTop: '0.1rem' }}>
        {data.animals_or_birds.join(", ")}
        </Header>
      </Grid.Column>
    </Grid>
  );
}

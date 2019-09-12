import React from 'react';
import { Grid, Segment, Step } from 'semantic-ui-react';

const EditCollection = props => {
//   console.log(props);
  return (
    <div data-testid="edit-collection-component">
      <h1>Edit Collection</h1>
      <Segment>
        <Grid>
          <Grid.Column width={5}>
            <Step.Group vertical>
              <Step>
                <Step.Content>
                  <Step.Description>
                    <h3>
                      {' '}
                      <a href="/">Staff name edit Farmer’s name record</a>
                    </h3>
                  </Step.Description>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Step.Description>
                    <h3>
                      {' '}
                      <a href="/">Staff name edit Farmer’s name record</a>
                    </h3>
                  </Step.Description>
                </Step.Content>
              </Step>
              <Step>
                <Step.Content>
                  <Step.Description>
                    <h3>
                      {' '}
                      <a href="/">Staff name edit Farmer’s name record</a>
                    </h3>
                  </Step.Description>
                </Step.Content>
              </Step>
            </Step.Group>
          </Grid.Column>
          <Grid.Column width={11}>
            <Segment>
              Join Solcioty Fitness in our fight to raise money for numerous
              organizations and charities in our community!We are partnering up
              with local health and wellness businesses to raise money for the
              charity of their preference. We will compete in a series of field
              day activities that are all fitness based in order to create a fun
              and competitive environment with the reward of giving back to our
              community. Each team will pick a charity that hits home for their
              business, and we will be competing in these different events to
              win the jackpot for the individual charities.$20 of your admission
              fee will go towards the jackpot while the other $15 will go
              towards your individual team's charity, so that ev…
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    </div>
  );
};

export default EditCollection;

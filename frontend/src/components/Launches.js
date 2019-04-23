import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number,
      mission_name,
      launch_year,
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h1>Launches:</h1>
        <Query query={LAUNCHES_QUERY}>
          {
            ({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>
              if (error) console.log(error)
              console.log(data);

              return data.launches.map(launch => <LaunchItem key={launch.flight_number} launch={launch} />);
            }
          }
        </Query>
      </Fragment>
    )
  }
}

export default Launches

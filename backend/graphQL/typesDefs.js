const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    launch(flight_number: Int): Launch
    launches: [ Launch ]
  }

  type Launch {
    flight_number: Int
    mission_name: String
    launch_year: String
    launch_date_local: String
    rocket: Rocket
  }

  type Rocket {
    rocket_id: String
    rocket_name: String
    rocket_type: String
  }
`;

module.exports = typeDefs;

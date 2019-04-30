const { ApolloError } = require('apollo-server-express');
const DataLoader = require('dataloader');
const fetch = require('./API');

function fetchLaunches() {
  return fetch.get('launches/')
           .then(({ data }) => data)
           .catch(err => {
               throw new ApolloError(err)
             }
           );
}

function fetchLaunch(flight_number) {
  return fetch.get(`launches/${flight_number}`)
           .then(({ data }) => data)
           .catch(err => {
               throw new ApolloError(err)
             }
           );
}

const launchesLoader = new DataLoader(
  urls => Promise.all(urls.map(fetchLaunch))
);

module.exports = {
  fetchLaunches,
  launchesLoader
}


// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: {
//     launch: {
//       type: LaunchType,
//       args: {
//         flight_number: { type: GraphQLInt },
//       },
//       resolve(parent, args) {
//         return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
//           .then(({ data }) => data);
//       }
//     },
//     launches: {
//       type: new GraphQLList(LaunchType),
//       resolve(parent) {
//         return axios.get('https://api.spacexdata.com/v3/launches/')
//           .then(({ data }) => data);
//       }
//     },
//     rocket: {
//       type: RocketType,
//       args: {
//         rocket_id: { type: GraphQLString }
//       },
//       resolve(parent, args) {
//         return axios.get(`https://api.spacexdata.com/v3/rockets/${args.rocket_id}`)
//           .then(({ data }) => data);
//       }
//     },
//     rockets: {
//       type: new GraphQLList(RocketType),
//       resolve(parent) {
//         return axios.get('https://api.spacexdata.com/v3/rockets/')
//           .then(({ data }) => data);
//       }
//     }
//   }
// })

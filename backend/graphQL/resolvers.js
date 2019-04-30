const {
  fetchLaunches,
  launchesLoader
} = require('../utils')

const resolvers = {
  Query: {
    launches: fetchLaunches,
    launch: (parent, { flight_number }) => launchesLoader.load(flight_number)
  }
}

module.exports = resolvers;

const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

// const PORT = process.env.PORT || 6000

app.listen(6001, () => console.log(`Graphql server running on port 6001`))

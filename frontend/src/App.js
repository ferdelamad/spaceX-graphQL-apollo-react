import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Launches from './components/Launches';

const client = new ApolloClient({
  uri: 'http://localhost:6001/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Space X App</h1>
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;

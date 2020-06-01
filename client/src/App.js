import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import AddUser from "./components/addUser/addUser";
import Form from "./components/form/form";
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <AddUser />
        <Form />
      </div>
    </ApolloProvider>
  );
}

export default App;

const { ApolloServer } = require('apollo-server');

const  typeDefs  = require('./schema');
const resolvers = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

// export all the important pieces for integration tests to use
module.exports = {
    ApolloServer,
    typeDefs,
    resolvers
}
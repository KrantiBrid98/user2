const { 
    typeDefs,
    resolvers,
    ApolloServer
} = require('../server')

const constructTestServer = () => {

    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    return { server };
};

module.exports.constructTestServer = constructTestServer;
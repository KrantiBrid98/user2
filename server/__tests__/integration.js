const { createTestClient } = require('apollo-server-testing');
const gql = require('graphql-tag');
const { ApolloServer } = require('apollo-server');


// const { constructTestServer } = require('../__utils');
const {
    typeDefs,
    resolvers,
} = require('../server')


const USER_QUERY = gql`   
{
    users{
      firstName
      id
    }
}
`

const ADD_USER = gql`
mutation addUser($firstName:String!) {
    addUser(firstName: $firstName){
        id
        firstName
    }
  }
`;

const server = new ApolloServer({
    typeDefs,
    resolvers
});

describe('Query', () => {
    it('fetch list of users', async () => {
        const { query } = createTestClient(server);
        const res = await query({ query: USER_QUERY });
        expect(res).toMatchSnapshot();
    });
})

describe('Mutation', () => {
    it('add user to list', async () => {
        const { mutate } = createTestClient(server)
        const res = await mutate({
            mutation: ADD_USER,
            variables: { firstName: 'testUser' }
        });
        expect(res).toMatchSnapshot();
    });
})
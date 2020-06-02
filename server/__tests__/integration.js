const { createTestClient } = require('apollo-server-testing');
const gql = require('graphql-tag');


const { constructTestServer } = require('./__utils');

const USER_QUERY = gql`   
{
    users{
      firstName
      id
    }
}
`

describe('Query', () => {
    it('fetch list of users', async () => {
        const { server } = constructTestServer()
        const { query } = createTestClient(server);
        const res = await query({ query: USER_QUERY });
        expect(res).toMatchSnapshot();
    })
})
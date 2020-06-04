const { Mutation } = require('../resolvers')

const addUser = jest.fn();

describe('Mutation', () => {
    describe('addUser', () => {
        describe('when user added', () => {

            addUser.mockReturnValueOnce([{ firstName: 'TestUser1' }]);

            const args = {
                id: '301',
                firstName: 'TestUser1',
                age: 5
            };
            const expectedResult = {
                id: '301',
                firstName: 'TestUser1',
                age: 5
            };
            let result;

            beforeEach(async () => {
                result = await Mutation.addUser(null, args)
            })

            it('returns the created user', async () => expect(result).toEqual(expectedResult));

        })
    })

})
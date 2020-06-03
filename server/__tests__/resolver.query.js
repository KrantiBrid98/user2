const { Query } = require('../resolvers')

describe('Query', () => {
    describe('company', () => {
        describe('get company details', () => {

            const args = {
               id: 1
            };
            const expectedResult = {
                "id": 1,
                "name": "apple",
                "description": "iphones"
              };

            let result;

            beforeEach(async () => {
                result = await Query.company(null, args)
            })

            it('returns the selected company', async () => expect(result).toEqual(expectedResult));

        })
    })

})
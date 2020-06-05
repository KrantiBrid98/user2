
import React from 'react';
import { cleanup, render } from '@testing-library/react';
// import { renderApollo } from '../test-utils'
import AddUser, {ADD_USER} from '../addUser/addUser'

// written with reference to https://github.com/apollographql/fullstack-tutorial/blob/1141633c3d3260ed45f664d3b52e4a451b3989f3/final/client/src/containers/__tests__/book-trips.tsx

describe('add users', () => {

    afterEach(cleanup);
    it('renders without error', () => {
        const { getByTestId } = render(<AddUser />);
        expect(getByTestId('user-form')).toBeTruthy();
    });

    it('completes mutation', async() => {
        let mock = [
            {
                request: { query: ADD_USER, variables: { firstName: 'Testuser1' }},
                result: {
                    data: {
                        users:[{
                            firstName: 'Testuser1'
                        }]
                    }
                }
            }
        ];
        const { getByTestId } = render(
            <AddUser/>,
            { mock },
          );
    })
})
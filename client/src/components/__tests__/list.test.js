import React from 'react';
import { render, cleanup } from '@testing-library/react';
// import { renderApollo } from '../test-utils'
import List, { USER_QUERY } from '../list/listFuncComponent'

describe('show list', () => {
    
    afterEach(cleanup);

    it('renders with error state', () => {
        let mocks = [
            {
                request: { query: USER_QUERY, variables: { id: '1010' } },
                error: new Error('Error :('),
            },
        ];

        // since we know the error message, we can use getByText
        // to recognize the error
        const { getByText } = renderApollo(<List />, {
            mocks
        });

        waitForElement(() => getByText('Error :('));
    })

    it('queries user and renders without error', () => {

        let mocks = [
            {
                request: { query: USER_QUERY, variables: { id: '1' } },
                result: {
                    data: {
                        users: [{
                            firstName: 'MyUser'
                        }]
                    }
                }
            },
        ];

        const { getByText } = render(<List />, {
            mocks
        });

        // check the loading state    
        return waitForElement(() => getByText('Loading...'));
    });
})
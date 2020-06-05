import React, { useState } from 'react'
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo'

export const ADD_USER = gql`
mutation addUser($firstName:String!) {
    addUser(firstName: $firstName){
        id
        firstName
    }
  }
`;

class AddUser extends React.Component {
    state = {
        user: ''
    }

    onInputChange = e => {
        this.setState({ user: e.target.value })
    }

    render() {
        return (
            <div data-testid="user-form">
                <Mutation mutation={ADD_USER}>
                    {
                        (addUser, { data }) => (
                            <form onSubmit={e => {
                                e.preventDefault();
                                addUser({ variables: { firstName: this.state.user } });
                            }}>

                                <input placeholder='Enter User name' onChange={(e) => this.onInputChange(e)} />
                                <button style={{ margin: '10px' }}>Add</button>
                            </form>
                        )
                    }

                </Mutation>
            </div >
        )
    }

}

export default AddUser;
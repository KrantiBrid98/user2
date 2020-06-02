import React, { useState } from 'react'
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo'

const ADD_USER = gql`
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
            <div>
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
import React, { useState } from 'react'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const ADD_USER = gql`
mutation addUser($firstName:String!) {
    addUser(firstName: $firstName){
        id
        firstName
    }
  }
`;

const AddUser = () => {
    const [user, setUser] = useState('')
    const [addUser] = useMutation(ADD_USER);

    const onInputChange = e => {
        setUser(e.target.value)
    }

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                addUser({ variables: { firstName: user } });
            }}>

                <input placeholder='Enter User name' onChange={(e) => onInputChange(e)} />
                <button style={{margin: '10px'}}>Add</button>
            </form>
        </div>
    )
}

export default AddUser;
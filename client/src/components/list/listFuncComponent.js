import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import './list.css'

const USER_QUERY = gql`   
{
    users{
      firstName
      id
    }
}
`

const DELETE_USER = gql`
mutation deleteUser($id:String!) {
  deleteUser(id: $id){
        id
        firstName
    }
  }
`;


const List = () => {
  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: mutationResult => [{ query: USER_QUERY }] // refetchQury will fetch the updated list of users and remove the deleted user from user list from screen
  });
  const { loading, error, data } = useQuery(USER_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <ul>
    {
      data.users.map(user => {
        return <><li key={user.id}>
          {user.firstName}
          <button className='delete' onClick={(e) => {
            e.preventDefault();
            deleteUser({ variables: { id: user.id } });
          }}>delete</button>
        </li></>
      })
    }

  </ul>
}

export default List
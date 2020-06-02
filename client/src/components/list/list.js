import React from 'react'
import { gql } from 'apollo-boost';
import { Mutation, Query } from 'react-apollo'

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


class List extends React.Component {
  render() {
    return (
      <Query query={USER_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (
            <ul>
              {
                data.users.map(user => {
                  return <><li key={user.id}>
                    {user.firstName}
                    <Mutation
                      mutation={DELETE_USER}
                      refetchQueries={() => {
                        return [{
                          query: USER_QUERY
                        }];
                      }}
                    >{
                        (deleteUser) => (
                          <button className='delete' onClick={(e) => {
                            e.preventDefault();
                            deleteUser({ variables: { id: user.id } });
                          }}>delete</button>
                        )
                      }
                    </Mutation>
                  </li></>
                })
              }

            </ul>
          )
        }}
      </Query>
    )
  }
}

export default List
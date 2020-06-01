const { gql } = require('apollo-server')

const typeDefs = gql`   
    type Company {
        id: Int
        name: String
        description: String
        user: [User]
    }

    type User {
        id: String
        firstName: String
        age: Int
        companyId: Int
        company: Company
    }

    type Query {
        users: [User]
        company(id: Int): Company
        companies: [Company]
    }

    type Mutation {
        addUser(firstName: String, age: Int): User
        deleteUser(id: String!): User
        editUser(firstName: String, age: Int, id: String, companyId: Int): User
    }

`

// query {
//     users {
//       id
//       firstName,
//       company{
//         id,
//         name,
//         description
//       }
//     }
//   }

module.exports = typeDefs
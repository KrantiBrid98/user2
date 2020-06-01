const axios = require('axios')

module.exports = {

  // Query resolvers
  Query: {
    users: (parentValue, args) => {
      console.log(parentValue, 'paremtva')
      return axios.get(`http://localhost:3000/users`)
        .then(res => res.data)
    },

    company: (parentValue, args) => {
      return axios.get(`http://localhost:3000/companies/${args.id}`)
        .then(res => res.data)
    },

    companies: (parentValue, args) => {
      console.log(parentValue, args, 'paremtva')
      return axios.get(`http://localhost:3000/companies`)
        .then(res => res.data)
    }
  },

  // Custom resolver types
  User: {
    // go to user and find any relation to resolve. 
    // Found company relation to resolve so added that
    company(parentValue, args) {
      return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
        .then(res => res.data)
    }
  },

  Company: {
    user(parentValue, args) {
      return axios.get(`http://localhost:3000/company/${parentValue.id}/users`)
        .then(res => res.data)
    }
  },

  Mutation: {
    addUser(parentValue, args) {
      return axios.post('http://localhost:3000/users/', {
        firstName: args.firstName,
        age: args.age
      })
        .then(res => res.data)
    },

    editUser(parentValue, args) {
      console.log(args.id, 'patch')
      return axios.patch(`https://jsonplaceholder.typicode.com/users/${args.id}`, args)
        .then(res => res.data)
    },

    deleteUser(parentValue, args) {
      return axios.delete(`http://localhost:3000/users/${args.id}`)
        .then(res => res.data)
    }
  }
}


// query {
//   users {
//     id
//     firstName,
//     company{
//       id,
//       name,
//       description
//     }
//   }
// }
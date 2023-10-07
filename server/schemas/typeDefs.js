const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Query {
    me: User
  }

  type Mutation {
    login (email:String, password:String): Auth
    addUser (userName:String, email:String, password:String)
    saveBook ([authors], description:String, title:String, bookId:ID, image:?, link:?): User
    removeBook (bookId): User
  }

  type User {
    _id: ID
    userName: String
    email: String
    bookCount: Number
    savedBooks: [Book]
  }

  type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: ?
    link: ?
  }

  type auth {
    token
    user: User
  }
`;

module.exports = typeDefs;
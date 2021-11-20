const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: Int
        authors: [String!]
        description: String!
        title: String!
        image: String!
        link: String
    }

    type Auth {
        token: String!
        user: [User]
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
        books: [Book]
        book(bookId: Int!): Book
        me: User
    }

    type Mutation {
        createUser(username: String!, email: String!, passwod: String!): Auth
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
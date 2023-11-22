const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    guilds: [Guild]
    pals: [User]
    posts: [Post]
  }

  type Post {
    _id: ID
    title: String
    description: String
    author: User
    comments: [Comment]
  }

  type Guild {
    _id: ID
    name: String
    description: String
    icon: String
    owner: User
    members: [User]
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getAllUsers: [User]
    getUser(username: String!): User
    getPost(postId: ID!): Post
    getPosts(postId: ID!): [Post]
    getGuild(guildId: ID!): Guild
    getGuilds: [Guild]
  }

  input UserInput {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(
      _id: ID!
      username: String!
      email: String!
      password: String!
    ): User
    joinGuild(username: String!, guildId: ID!): User
    addPal(username: String!, palUsername: String!): User
    removePal(username: String!, palUsername: String!): User

    createGuild(
      name: String!
      description: String
      icon: String
      owner: UserInput
    ): Guild
    updateGuild(
      _id: ID!
      name: String!
      description: String
      icon: String
      owner: UserInput
    ): Guild
    deleteGuild(_id: ID!): Guild

    createPost(
      title: String!
      description: String
      icon: String
      author: UserInput
    ): Post
    updatePost(
      _id: ID!
      title: String!
      description: String
      icon: String
      author: UserInput
    ): Post
    deletePost(_id: ID!): Post

    createComment(
      postId: ID!
      commentText: String!
      commentAuthor: UserInput!
    ): Post
    deleteComment(postId: ID!, commentId: ID!): Post
  }
`

module.exports = typeDefs

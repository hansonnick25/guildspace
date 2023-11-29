const { gql } = require('apollo-server')

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    guilds: [Guild]
    friends: [User]
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
    getUser(userId: ID!): User
    getPost(postId: ID!): Post
    getGuild(guildId: ID!): Guild
    getAllUsers: [User]
    getAllPosts: [Post]
    getAllGuilds: [Guild]
    me: User
  }

  input UserInput {
    _id: ID
    username: String
    email: String
    password: String
  }

  input UserIdInput {
    _id: ID!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(
      _id: ID!
      username: String!
      email: String!
      password: String!
    ): User
    joinGuild(username: String!, guildId: ID!): User
    addFriend(username: String!, friendUsername: String!): User
    removeFriend(username: String!, friendUsername: String!): User

    createGuild(
      name: String!
      description: String
      icon: String
      owner: UserIdInput
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
      commentAuthor: String!
    ): Post
    deleteComment(postId: ID!, commentId: ID!): Post
  }
`

module.exports = typeDefs

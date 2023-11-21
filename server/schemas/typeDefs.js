const typeDefs = `
  type User {
    _id: ID
    name: String
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
    getUser(username: String!): User
    getPost()
  }
`

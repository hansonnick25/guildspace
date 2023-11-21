const typeDefs = `
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
    getUser(username: String!): User
    getPost(postId: ID!): Post
    getPosts(postId: ID!): [Post]
    getGuild(guildId: ID!): Guild
    getGuilds(guildId: ID!): [Guild]
  }

  type Mutation {
    # User
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateUser(_id: ID!, username: String!, email: String!, password: String!): User
    joinGuild(username: String!, guildId: ID!): User
    addPal(username: String!, palUsername: String!): User
    removePal(username: String!, palUsername: String!): User

    # Guilds
    createGuild(name: String!, description: String, icon: String, owner: User): Guild
    updateGuild(_id: ID!, name: String!, description: String, icon: String, owner: User): Guild
    deleteGuild(_id: ID!): Guild

    # Posts
    createPost(title: String!, description: String, icon: String, author: User): Post
    updatePost(_id: ID!, title: String!, description: String, icon: String, author: User): Post
    deletePost(_id: ID!): Post

    # Comments
    createComment(postId: ID!, commentText: String!, commentAuthor: User!): Post
    deleteComment(postId: ID!, commentId: ID!): Post
  }
`

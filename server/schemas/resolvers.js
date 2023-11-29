const { User, Post, Guild } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
  Query: {
    // Get all models inidividually
    getUser: async (parent, { userId }) => {
      return User.findOne({ _id: userId })
        .populate('guilds')
        .populate('posts')
        .populate('friends')
    },

    getPost: async (parent, { postId }) => {
      return Post.findOne({ _id: postId }).populate('author')
    },

    getGuild: async (parent, { guildId }) => {
      return Guild.findOne({ _id: guildId })
        .populate('owner')
        .populate('members')
    },

    // Get all models
    getAllUsers: async () => {
      return User.find()
        .populate('guilds')
        .populate('posts')
        .populate('friends')
    },

    getAllPosts: async () => {
      return Post.find().populate('author')
    },

    getAllGuilds: async () => {
      return Guild.find().populate('owner').populate('members')
    },
  },
  Mutation: {
    // User
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password })

      const token = signToken(user)

      return { user, token }
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })

      if (!user) {
        throw AuthenticationError
      }

      const correctPw = await user.isCorrectPassword(password)

      if (!correctPw) {
        throw AuthenticationError
      }

      const token = signToken(user)

      return { token, user }
    },

    updateUser: async (parent, { _id, username, email, password }) => {
      const user = await User.findOneAndUpdate(
        { _id },
        { username, email, password },
        { new: true }
      )
      return user
    },

    joinGuild: async (parent, { username, guildId }) => {
      const guild = await User.findOneAndUpdate(
        { username },
        { $addToSet: { guilds: guildId } },
        { new: true }
      )
      return guild
    },

    addFriend: async (parent, { username, friendUsername }) => {
      const friend = await User.findOneAndUpdate(
        { username },
        { $addToSet: { friends: friendUsername } },
        { new: true }
      )
      return friend
    },

    removeFriend: async (parent, { username, friendUsername }) => {
      const friend = await User.findOneAndUpdate(
        { username },
        { $pull: { friends: friendUsername } },
        { new: true }
      )
      return friend
    },

    // Guilds
    createGuild: async (parent, { name, description, icon, owner }) => {
      const guild = await Guild.create({ name, description, icon, owner })
      return guild
    },

    updateGuild: async (parent, { _id, name, description, icon, owner }) => {
      const guild = await Guild.findOneAndUpdate(
        { _id },
        { name, description, icon, owner },
        { new: true }
      )
      return guild
    },

    deleteGuild: async (parent, { _id }) => {
      const guild = await Guild.findOneAndDelete({ _id })
      return guild
    },

    // Posts
    createPost: async (parent, { title, description, icon, author }) => {
      const post = await Post.create({ title, description, icon, author })
      return post
    },

    updatePost: async (parent, { _id, title, description, icon, author }) => {
      const post = await Post.findOneAndUpdate(
        { _id },
        { title, description, type, icon, author },
        { new: true }
      )
      return post
    },

    deletePost: async (parent, { _id }) => {
      const post = await Post.findOneAndDelete({ _id })
      return post
    },

    // Comments
    createComment: async (parent, { postId, commentText, commentAuthor }) => {
      const comment = await Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      )
      return comment
    },

    deleteComment: async (parent, { postId, commentId }) => {
      const comment = await Post.findOneAndUpdate(
        { _id: postId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      )
      return comment
    },
  },
}

module.exports = resolvers

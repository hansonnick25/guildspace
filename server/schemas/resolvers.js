const { User, Post, Guild } = require('../models')
const resolvers = {
  Query: {
    getUser: async (parent, { username }) => {
      return User.findOne(username)
        .populate('guilds')
        .populate('posts')
        .populate('pals')
    },

    getPost: async (parent, { postId }) => {
      return Post.findOne({ _id: postId })
    },

    getGuild: async (parent, { guildId }) => {
      return Guild.findOne({ _id: guildId })
    },

    getPosts: async (parent, { username }) => {
      return Post.find({ username }).sort({ createdAt: -1 })
    },

    getGuilds: async (parent, { username }) => {
      return Guild.find({ username }).sort({ createdAt: -1 })
    },
  },
  Mutation: {
    // Create
    createGame: async (parent, args) => {
      const game = await Game.create(args)
      return game
    },
    createGuild: async (parent, args) => {
      const guild = await Guild.create(args)
      return guild
    },
    createPost: async (parent, args) => {
      const post = await Post.create(args)
      return post
    },
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
    createUser: async (parent, args) => {
      const user = await User.create(args)
      return user
    },
    // Update
    updateGuild: async (parent, { _id, name, description, icon }) => {
      const guild = await Guild.findOneAndUpdate(
        { _id },
        { name, description, icon },
        { new: true }
      )
      return guild
    },
    updatePost: async (parent, { _id, title, description, icon }) => {
      const post = await Post.findOneAndUpdate(
        { _id },
        { title, description, type },
        { new: true }
      )
      return post
    },
    updateUser: async (parent, { _id, username, email, password }) => {
      const user = await User.findOneAndUpdate(
        { _id },
        { username, email, password },
        { new: true }
      )
      return user
    },
    // Delete
    deleteGuild: async (parent, { _id }) => {
      const guild = await Guild.findOneAndDelete({ _id })
      return guild
    },
    deletePost: async (parent, { _id }) => {
      const post = await Post.findOneAndDelete({ _id })
      return post
    },
    deleteComment: async (parent, { postId, commentId }) => {
      const comment = await Post.findOneAndUpdate(
        { _id: postId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      )
      return comment
    },
    deleteUser: async (parent, { _id }) => {
      const user = await User.findOneAndDelete({ _id })
      return user
    },
    // Guilds
    addGuild: async (parent, { username, guildId }) => {
      const guild = await User.findOneAndUpdate(
        { username },
        { $addToSet: { guilds: guildId } },
        { new: true }
      )
      return guild
    },
    // Pals
    addPal: async (parent, { username, palUsername }) => {
      const pal = await User.findOneAndUpdate(
        { username },
        { $addToSet: { pals: palUsername } },
        { new: true }
      )
      return pal
    },
    removePal: async (parent, { username, palUsername }) => {
      const pal = await User.findOneAndUpdate(
        { username },
        { $pull: { pals: palUsername } },
        { new: true }
      )
      return pal
    },
  },
}

module.exports = resolvers

const { User, Post, Guild } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('guilds')
          .populate('posts')
          .populate('friends')

        return userData
      }
      throw AuthenticationError
    },

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

    updateUser: async (parent, { username, email, password }, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { username, email, password },
          { new: true }
        )
        return user
      }
      throw AuthenticationError
    },

    joinGuild: async (parent, { guildId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { guilds: guildId } },
          { new: true }
        ).populate('guilds')
        return updatedUser
      }
      throw AuthenticationError
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
    createGuild: async (parent, { name, description, icon }, context) => {
      if (context.user) {
        const guild = await Guild.create({
          name,
          description,
          icon,
          owner: context.user._id,
        })

        // add owner to members as well
        const guildWithOwner = await Guild.findOneAndUpdate(
          { _id: guild._id },
          { $addToSet: { members: context.user._id } },
          { new: true }
        )

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { guilds: guild._id } },
          { new: true }
        )

        return guildWithOwner
      }

      throw AuthenticationError
    },

    updateGuild: async (parent, args, context) => {
      if (context.user) {
        const guild = await Guild.findOneAndUpdate(
          { _id: args._id },
          { ...args },
          { new: true }
        )
        return guild
      }
      throw AuthenticationError
    },

    deleteGuild: async (parent, { _id }, context) => {
      if (context.user) {
        const guild = await Guild.findOneAndDelete({ _id })
        return guild
      }
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

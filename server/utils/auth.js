const { GraphQLError } = require('graphql')
const jwt = require('jsonwebtoken')

const secret = 'mysecretssshhhhhhh'
const expiration = '2h'

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  authMiddleware: function ({ req }) {
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim()
    }

    let user

    if (token) {
      // verify token and get user data out of it
      try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration })
        user = data
      } catch {
        console.log('Invalid token')
      }
    }

    // return context object
    return { user }
  },
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id }
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
  },
}
